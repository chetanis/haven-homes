import Image from 'next/image'
import HomeSearch from './HomeSearch'

function Hero() {
    return (
        <div className='absolute h-[40vh] md:h-[80vh] w-full overflow-hidden'>
            <Image
                fill
                sizes='(max-height: 100px) 50vw'
                src="/hero.jpg"
                alt="hero"
                className="object-cover h-auto w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-transparent opacity-45" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20" />
            <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 text-white tracking-wider">

                <h1 className="text-6xl font-bold mb-4 md:mb-5 relative z-10">Haven Homes</h1>
                <p className='text-lg mt-5 max-w-lg relative z-10 text-shadow'>
                    At Haven House, we believe that every dream deserves a perfect home. Our dedicated team is here to guide you through every step of your journey, connecting you with properties that resonate with your vision. Discover a place where comfort meets elegance, and let us help you find your dream home today!
                </p>
                <div className='relative z-10'>
                    <HomeSearch />
                </div>

            </div>
        </div>
    )
}

export default Hero