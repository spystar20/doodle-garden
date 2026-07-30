import React, { useEffect, useState } from 'react'
import { IoPulse, IoPulseSharp, IoRadioButtonOff, IoStar } from 'react-icons/io5'
import { MdOutline18UpRating, MdOutline6kPlus } from 'react-icons/md'
import { ImPlus, ImSpoonKnife } from "react-icons/im";
import DishCard from '../Components/DishCard';
import AdminDishCard from '../Components/AdminDishCard';
import { toast, Toaster } from 'sonner';
import { useMenu } from '../hooks/menuHooks';
import { useDeleteDish } from '../hooks/adminMutation/menuMuation';

const ManageMenu = () => {
  const [openModal, setOpenModal] = useState(false)
  const [selected, setSelected] = useState(null)
  const { isLoading, isError, data: menu } = useMenu()
  const { mutate: deleteItem } = useDeleteDish()
  const handleDelete = (itemId) => {
    deleteItem({
      itemId
    }, {
      onSuccess: () => {
        toast.success('dish deleted')
        setOpenModal(false)
      }
    })

  }

  return (
    <div className="w-full min-h-screen mx-4 relative rounded-lg text-brand px-4 py-5 flex flex-col gap-4 overflow-hidden">

      {/* Header */}
      <div className="flex flex-col gap-1 w-full">
        <h2 className="text-3xl font-semibold font-heading">
          Menu Management
        </h2>

        <p className="font-body text-brand/70">
          Manage dishes, prices and availability
        </p>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-3 gap-6">
        {menu?.map((i) => (
          <AdminDishCard
            setOpenModal={() => {
              setOpenModal(true);
              setSelected(i._id);
            }}
            link_edit={`/admin/manage-menu/${i._id}/edit`}
            key={i._id}
            rating={4}
            category={i.category}
            image={i.image}
            title={i.title}
            desc={i.desc}
            price={i.price}
            Isveg={i.isVeg}
          />
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      <div
        className={`absolute -translate-y-1/2 self-center top-1/2
    bg-primary/30 backdrop-blur-sm
    w-full min-h-screen
    flex items-center justify-center
    ${openModal ? "flex" : "hidden"}`}
      >

        <div className="w-full max-w-md rounded-3xl border border-brand/20 bg-primary p-6 shadow-2xl">

          <div className="flex flex-col gap-2">

            <span className="text-red-400 text-sm font-medium uppercase tracking-wider font-body">
              Delete Item
            </span>

            <h2 className="font-heading text-2xl font-semibold text-brand">
              Are you sure?
            </h2>

            <p className="text-brand/70 text-sm font-body">
              This action will permanently remove this dish from your menu.
              This cannot be undone.
            </p>

          </div>

          {/* Actions */}
          <div className="flex gap-3 px-4 mt-4">

            <button
              onClick={() => handleDelete(selected)}
              className="w-full cursor-pointer
          border-red-400
          hover:scale-95
          text-brand
          rounded-full
          bg-red-400
          py-1
          text-sm
          font-medium
          font-body
          transition-transform"
            >
              Yes
            </button>

            <button
              onClick={() => setOpenModal(false)}
              className="w-full cursor-pointer
          hover:scale-95
          border-brand
          text-primary
          rounded-full
          bg-brand
          py-1
          text-sm
          font-medium
          font-body
          transition-transform"
            >
              No
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ManageMenu