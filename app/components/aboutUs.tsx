import {
    TextRevealCard,
  } from "./ui/text-reveal-card";


const AboutUs = () => {
    return (
        <div id="about" className="flex-col  item-center md:mt-[40px]" >

                <TextRevealCard
                className="w-[100%] md:text-[40px] text-[22px] bg-transparent border-none text-center flex item-center justify-center"
                text=" What you Think About Us ?  "
                revealText="We Know What you want ?  "
                 />
        


        <div className="grid md:grid-cols-3 grid-rows-3 mb-[20px] md:h-[100vh] h-[90vh]">

             <figure className="transition-all absulote duration-300 hidden md:flex  cursor-pointer filter grayscale hover:grayscale-0 hover:scale-x-95">
                <img className="rounded-lg md:w-[375px]  md:h-[450px]  object-cover " src="https://voguemensalon.com/wp-content/uploads/2022/04/barbershop-1536x1025.jpg" alt="image description" />
            </figure>

            <div className="flex-col item-center md:p-5 p-1 gap-5 md:px-5">
                    <p className="p-4 text-[17px] font-white  capitalize  font-normal ">
                    Enjoy the ultimate relaxed grooming experience for men every time you step into Vogue Men’s  Salon at one of the best and most luxurious spots in Lusail, Qatar at Century Marina Hotel. 
                    </p>
                    <p className="p-4 text-[17px] font-white  capitalize font-normal ">
                    At Vogue Men’s Salon we are passionate about the art of men’s grooming, pampering, haircare and more. With our hair stylists and barbers, who are specially trained and have great experience will create the perfect look for your style and demands. 
                    </p>
                    <p className="p-4 text-[17px] font-white   capitalize font-normal">
                    We strive for excellence in all areas: services, ambiance, products, staff, efficiency, hygiene, customer satisfaction and more, aiming to create a luxurious environment where gentlemen of all ages can come and receive the highest standards of service
                    </p>
            </div>

            <figure className="transition-all hidden md:flex   duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <img className="rounded-lg md:w-[375px] md:h-[600px]  object-cover  border-[15px] border-white " src="https://voguemensalon.com/wp-content/uploads/2022/04/vintage-chairs-in-barbershop.jpg" alt="image description" />
            </figure>

        </div>


    </div>
    )
}

export default AboutUs ;