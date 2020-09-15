import Link from 'next/link';
import {IconTwitterLogo, IconHome,
   IconExplore, IconNotifications,
    IconMessages, IconList, IconBookmarks, IconProfile, IconMore} from '../components/icons';



export default function Home() {
  return (
    <div  className="bg-body text-white ">

      <div  className=" grid grid-cols-3 mx-64 min-h-screen" style={{ gridTemplateColumns: '250px 1fr 250px' }} >
        <nav>
          <div className="mt-4 mb-8 ml-3">
            <IconTwitterLogo className="text-4xl "/>
          </div>
          <ul>
            <li className="mb-3">
              <Link href="/home">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center group-hover:bg-gray-900 px-4 py-2 rounded-full group-hover:text-primary">
                      <span><IconHome className="group-hover:text-primary"/></span>
                      <span className="ml-4 mr-2 text-base" >Home</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/home">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center group-hover:bg-gray-900 px-4 py-2 rounded-full group-hover:text-primary">
                      <span><IconExplore className="group-hover:text-primary"/></span>
                    <span className="ml-4 mr-2 text-base" >Explore</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/home">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center group-hover:bg-gray-900 px-4 py-2 rounded-full group-hover:text-primary">
                    <span><IconNotifications  className="group-hover:text-primary" /></span>
                    <span className="ml-4 mr-2 text-base" >Notifications</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/home">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center group-hover:bg-gray-900 px-4 py-2 rounded-full group-hover:text-primary">
                      <span><IconMessages  className="group-hover:text-primary" /></span>
                      <span className="ml-4 mr-2 text-base" >Messages</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/home">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center group-hover:bg-gray-900 px-4 py-2 rounded-full group-hover:text-primary">
                      <span><IconBookmarks className="group-hover:text-primary"/></span>
                      <span className="ml-4 mr-2 text-base" >Bookmarks</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/home">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center group-hover:bg-gray-900 px-4 py-2 rounded-full group-hover:text-primary">
                      <span><IconList  className="group-hover:text-primary"/></span>
                      <span className="ml-4 mr-2 text-base" >Lists</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/home">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center group-hover:bg-gray-900 px-4 py-2 rounded-full group-hover:text-primary">
                      <span><IconProfile  className="group-hover:text-primary"/></span>
                      <span className="ml-4 mr-2 text-base" >Profile</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/home">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center group-hover:bg-gray-900 px-4 py-2 rounded-full group-hover:text-primary">
                      <span><IconMore  className="group-hover:text-primary"/></span>
                      <span className="ml-4 mr-2 text-base" >More</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          tweets
        </main>
        <aside>
          links
        </aside>

      </div>
    </div>
  )
}
