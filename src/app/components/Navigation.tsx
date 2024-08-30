import Link from 'next/link'
import React from 'react'
import { FaBars } from "react-icons/fa6";

const navigationMenu = [
  {
    href:'#home',
    label:'ホーム',
  },
  {
    href:'#services',
    label:'サービス',
  },
  {
    href:'#solutions',
    label:'ソリューションズ',
  },
  {
    href:'#testimonials',
    label:'カスタマー',
  },
  {
    href:'#blog',
    label:'ブログ・ニュース',
  },
]

const Navigation = () => {
  return (
    <>
      {/* WEBメニュー */}
      <header className='py-7'>
        <div className='container px-4 mx-auto'>
          <div className='flex justify-between items-center'>
            {/* ロゴ */}
            <div>
              <Link href='/'>
                <img 
                  src="/assets/logo.png" 
                  width={90}
                  height={60}
                  alt="ロゴ" />
              </Link>
            </div>
            {/* メニュー */}
            <div className='hidden lg:block text-center'>
              <ul className='flex space-x-7'>
                {navigationMenu.map((item,index) => (
                  <li key={index} className='text-body'>
                    <Link href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* ボタン */}
            <div>
              <Link href={"#"} 
                className='btnBlue inline-flex lg:inline-block max-lg:hidden'>
                申し込み
              </Link>
              {/* モバイル用 */}
              <button className='block lg:hidden'>
                <FaBars className='text-4xl'/>
              </button>
            </div>
          </div>
        </div>
      </header>


      {/* モバイルメニュー */}
      <div>
        <div>
          <div>
            <div>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation