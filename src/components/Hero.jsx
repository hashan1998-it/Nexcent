import hero from '../assets/images/hero.png'

export default function Hero() {
    return (
        <div className="relative top-16 mx-auto w-full h-[calc(100svh-4rem)]">
            <div className="w-full max-w-7xl mx-auto p-4 flex h-full md:flex-row flex-col-reverse">
                {/* Left Side */}
                <div className="w-full h-full flex flex-col justify-center gap-4">
                    {/* Hero Text */}
                    <div className='text-3xl md:text-6xl font-semibold flex justify-center md:block text-center md:text-left'>
                        <p>Lessons and insights<span className='text-green-500'> from 8 years</span></p>
                    </div>

                    {/* Hero Subtext */}
                    <p className='text-gray-600 text-sm md:text-lg text-center md:text-left'>Where to grow your business as a photographer: site or social media?</p>
                    
                    {/* Hero Buttons */}
                    <div className='flex gap-4 justify-center md:justify-start'>
                        <button className="items-center px-4 py-2 font-semibold text-white bg-green-500 md:flex rounded-lg">Login</button>
                        <button className="text-sm font-medium text-gray-600 sm:text-base border-2 text-center px-4 py-2 rounded-lg border-green-500">Register</button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full flex items-center justify-center h-full">
                    <img src={hero} alt="hero" />
                </div>

            </div>
        </div>
    )
}
