"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Import the Input component
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form"; // Import react-hook-form

function AddNewStudent() {
  const [open, setOpen] = useState(false);

  // Using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Submit handler for form
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add your save logic here, e.g., sending data to the backend
    setOpen(false); // Close the dialog after saving
    reset(); // Reset the form after submission
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>+ Add New Student</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="py-2">
                  <label>Full Name</label>
                  <Input
                    {...register("fullName", { required: "Full Name is required" })}
                    placeholder="Ex. MAX PANE"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col py-2">
                  <label>Select Grade</label>
                  <select
                    {...register("grade", { required: "Grade is required" })}
                    className="p-3 border rounded-lg"
                  >
                    <option value="">Select Grade</option>
                    <option value="1th">1th</option>
                    <option value="2th">2th</option>
                    <option value="3th">3th</option>
                    <option value="4th">4th</option>
                    <option value="5th">5th</option>
                    <option value="6th">6th</option>
                    <option value="7th">7th</option>
                    <option value="8th">8th</option>
                    <option value="9th">9th</option>
                    <option value="10th">10th</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                    
                  </select>
                  {errors.grade && (
                    <p className="text-red-500 text-sm">{errors.grade.message}</p>
                  )}
                </div>

                <div className="py-2">
                  <label>Contact Number</label>
                  <Input
                    type="number" 
                    {...register("contactNumber", {
                      required: "Contact number is required",
                      pattern: {
                        value: /^[0-9]{10}$/, // Regular expression for 10-digit number
                        message: "Enter a valid 10-digit contact number",
                      },
                    })}
                    placeholder="Ex. 9874563210"
                  />
                  {errors.contactNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.contactNumber.message}
                    </p>
                  )}
                </div>

                <div className="py-2">
                  <label>Address</label>
                  <Input
                    {...register("address", { required: "Address is required" })}
                    placeholder="Ex. 525 N Tryon Street, NC"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">{errors.address.message}</p>
                  )}
                </div>

                <div className="flex gap-3 items-center justify-end mt-6">
                  <Button onClick={() => setOpen(false)} variant="ghost">
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
