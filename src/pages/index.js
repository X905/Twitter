import Sidebar from '../components/sidebar';
import ComposeTweet from '../components/composeTweet';
import {IconTwitterLogo, IconInstead} from '../components/icons';



export default function Home() {
  return (
    <div  className="bg-body text-white ">

      <div  className=" grid grid-cols-3 mx-20 min-h-screen" style={{ gridTemplateColumns: '250px 1fr 350px' }} >
        <nav>
          <div className="mt-4 mb-8 ml-3">
            <IconTwitterLogo className="text-4xl "/>
          </div>
          <Sidebar/>
        </nav>
        <main className="min-h-screen border-l border-r border-gray-900">
          <header className="flex justify-between px-4 py-3 border-b border-gray-900">
            <span>
              home
            </span>
            <span><IconInstead className="text-1xl text-primary"/></span>
          </header>
          <ComposeTweet/>
        </main>
        <aside>
          links
        </aside>

      </div>
    </div>
  )
}
