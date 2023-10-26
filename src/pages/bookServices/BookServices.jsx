import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BookServices = () => {
   const service = useLoaderData();
   const { _id, title, price, img } = service;
   const { user } = useContext(AuthContext);

   const handleCheckout = (e) => {
     e.preventDefault();

     const form = e.target;
     const name = form.name.value;
     const date = form.date.value;
     const message = form.message.value;
     const email = user?.email;
     const order = {
        customerName: name,
        email,
        date,
        img,
        service: title,
        service_id: _id,
        price,
        message,
    };
       fetch("http://127.0.0.1:5000/booking", {
           method: 'POST',
           headers: { 'content-type': 'application/json' },
           body:JSON.stringify(order)
        })
          .then((res) => res.json())
           .then((data) => {
              if(data.insertedId){
                alert('Booking successfully!')
              }
          });

   };

   return (
     <div className=" my-5 bg-slate-200 rounded-lg py-20 px-20">
       <div>
         <h2 className=" text-center text-xl font-bold mb-4">
           CheckOut Services : {title}
         </h2>
       </div>
       <form onSubmit={handleCheckout}>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
           <div className="form-control">
             <label className="label">
               <span className="label-text">Name</span>
             </label>
             <input
               type="text"
               name="name"
               defaultValue={user?.displayName}
               placeholder="name"
               className="input input-bordered"
               required
             />
           </div>

           <div className="form-control">
             <label className="label">
               <span className="label-text">Date</span>
             </label>
             <input
               type="date"
               name="date"
               className="input input-bordered"
               required
             />
           </div>

           <div className="form-control">
             <label className="label">
               <span className="label-text">Your Email</span>
             </label>
             <input
               type="email"
               name="email"
               defaultValue={user?.email}
               placeholder="your email"
               className="input input-bordered"
               required
             />
           </div>

           <div className="form-control">
             <label className="label">
               <span className="label-text">Due Account</span>
             </label>
             <input
               type="text"
               defaultValue={"$" + price}
               className="input input-bordered"
               required
             />
           </div>
         </div>
         <div className=" mt-4">
           <label className="label">
             <span className="label-text">Your Message</span>
           </label>
           <textarea
             className=" textarea textarea-bordered form-control w-full"
             name="message"
             cols="30"
             rows="5"
           ></textarea>
         </div>
         <div className="form-control mt-5">
           <input
             type="submit"
             className=" btn bg-[#FF3811] text-white normal-case text-xl hover:bg-[#942711] "
             value="Order Confirm"
           />
         </div>
       </form>
     </div>
   );
};

export default BookServices;
