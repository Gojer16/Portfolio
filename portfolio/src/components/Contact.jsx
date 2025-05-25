import React from 'react'
import { BsEnvelopeHeart } from "react-icons/bs";


const Contact = () => {
  return (
    <div>
        <div className='h-[100hv] py-24 translate-y-4 transition-all duration-500'>
            <div className="container mx-auto px-4 ">
                <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
                <p className="text-xl text-gray-300 text-center mb-16">Let's work or collaborate!</p>

                <div className="grid grid-cols-3 gap-12">
                    <div className=" grid grid-cols-1 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <div className="w-12 h-12 bg-pink-300/10 rounded-full flex justify-center items-center mx-auto mb-4">
                                <BsEnvelopeHeart className='text-3xl text-red-400'/>

                            </div>
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-gray-300">example@gmail.com</p>

                            
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <div className="w-12 h-12 bg-pink-300/10 rounded-full flex justify-center items-center mx-auto mb-4">
                                <BsEnvelopeHeart className='text-3xl text-red-400'/>

                            </div>
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-gray-300">example@gmail.com</p>

                            
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <div className="w-12 h-12 bg-pink-300/10 rounded-full flex justify-center items-center mx-auto mb-4">
                                <BsEnvelopeHeart className='text-3xl text-red-400'/>

                            </div>
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-gray-300">example@gmail.com</p>

                            
                        </div>
                        
                    </div>
                    <div className="col-span-2">
                        <form id='contactForm' className=" bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 text-black">Send me a message</h3>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-2 '>Name</label>
                                    <input id='name' type="text" name='name' required className='outline-none  focus:ring-2 transition-colors  focus:border-transparent focus:ring-blue-500 w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 '/>
                                </div>

                                <div>
                                    <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2 '>Email</label>
                                    <input id='email' type="text" name='email' required className='outline-none  focus:ring-2 transition-colors  focus:border-transparent focus:ring-blue-500 w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 '/>
                                </div>

                                <div>
                                    <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-2 '>Message</label>
                                    <textarea id='message' rows={5} type="text" name='message' required className='outline-none  focus:ring-2 transition-colors  focus:border-transparent focus:ring-blue-500 w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 '/>
                                </div>
                                <button type='submit' className='w-full px-8 py-3 bg-purple-300 transition-all duration-300 shadow-lg rounded-lg hover:bg-purple-400 active:bg-purple-200 hover:-translate-y-1 hover:shadow-purple-300/30 transform hover:scale-105 active:scale-95  text-black'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact