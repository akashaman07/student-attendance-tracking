"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import GlobalApi from "@/app/_services/GlobalApi";
import { toast } from "sonner";

function AddNewStudent() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("FormData", data);
    try {
      const resp = await GlobalApi.CreateNewStudent(data);
      console.log("--", resp);
      if (resp.data) {
        setOpen(false);
        toast("New Student Added!");
        reset(); // Reset the form fields after successful submission
      }
    } catch (err) {
      console.error(err);
      setError("Failed to add student. Please try again.");
    }
  };

  // Define grade options with IDs
  const gradeOptions = [
    { id: "1", name: "1st Grade" },
    { id: "2", name: "2nd Grade" },
    { id: "3", name: "3rd Grade" },
    { id: "4", name: "4th Grade" },
    { id: "5", name: "5th Grade" },
    { id: "6", name: "6th Grade" },
    { id: "7", name: "7th Grade" },
    { id: "8", name: "8th Grade" },
    { id: "9", name: "9th Grade" },
    { id: "10", name: "10th Grade" },
    { id: "11", name: "11th Grade" },
    { id: "12", name: "12th Grade" },
  ];

  return (
    <div>
      <Button onClick={() => setOpen(true)}>+ Add New Student</Button>

      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (!isOpen) {
            reset(); // Reset the form when dialog closes
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>
              {error && <p className="text-red-500">{error}</p>}
              {successMessage && (
                <p className="text-green-500">{successMessage}</p>
              )}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="py-2">
                  <label htmlFor="name">Full Name</label>
                  <Input
                    id="name"
                    placeholder="Ex. John Carry"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="flex flex-col py-2">
                  <label htmlFor="grade">Grade</label>
                  <select
                    id="grade"
                    {...register("grade", { required: "Grade is required" })}
                  >
                    <option value="">Select a grade</option>
                    {gradeOptions.map(({ id, name }) => (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    ))}
                  </select>
                  {errors.grade && (
                    <p className="text-red-500">{errors.grade.message}</p>
                  )}
                </div>

                <div className="py-2">
                  <label htmlFor="contact">Contact Number</label>
                  <Input
                    id="contact"
                    type="tel"
                    placeholder="Ex. 9876543210"
                    {...register("contact", {
                      required: "Contact Number is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Contact Number must be 10 digits.",
                      },
                    })}
                  />
                  {errors.contact && (
                    <p className="text-red-500">{errors.contact.message}</p>
                  )}
                </div>
                <div className="py-2">
                  <label htmlFor="address">Address</label>
                  <Input
                    id="address"
                    placeholder="Ex. 523 N Tryon Street"
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                  {errors.address && (
                    <p className="text-red-500">{errors.address.message}</p>
                  )}
                </div>

                <div className="flex gap-3 items-center justify-end mt-5">
                  <Button
                    onClick={() => {
                      setOpen(false);
                      reset(); // Reset the form fields when cancelling
                    }}
                    variant="ghost"
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewStudent;
