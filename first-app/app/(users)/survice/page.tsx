import React from 'react'
import Image from 'next/image';
import styles from "./survice.module.css";
function page() {
  return (
    <div className="grid grid-cols-3 gap-8">
  {/* <!-- Team Member 1 --> */}
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
    <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
      <Image src="/globe.svg" width={200} height={200} alt='sanu' className='w-full h-full rounded-full'></Image>
      <span className="text-2xl font-bold text-purple-600">VBT</span>
    </div>
    <h3 className="text-lg font-semibold text-center text-gray-800">
      Thapa Technical
    </h3>
    <p className="text-sm text-gray-600 text-center mt-2">
      Frontend Developer
    </p>
    <p className="text-xs text-gray-500 text-center mt-1">
      React & TypeScript
    </p>
  </div>
</div>

  )
}

export default page