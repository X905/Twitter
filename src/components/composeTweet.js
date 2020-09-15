import {IconImage, IconGif, IconStats, IconEmoji, IconCalendar, IconPlus, IconProgress} from '../components/icons';
import PrimaryButton from '../components/PrimaryButton';


export default function ComposeTweet(){

    return(
        <div className="flex px-4 py-3">
            <div className="mr-4">
                <img className="w-12 h-12 rounded-full" src="https://pbs.twimg.com/profile_images/1087543172610240512/C_CRQlC1_bigger.jpg"/>
            </div>
            <div className="flex-1">
                <div>
                    <textarea className="bg-transparent text-lg block" placeholder="What's happening?" style={{resize: 'none'}} ></textarea>
                </div>
                <div className = "flex justify-between">
                    <ul className="flex items-center text-sm">
                        <li className="mr-1 hover:bg-gray-900 px-2 py-2 rounded-full"><IconImage className="text-primary"/></li>
                        <li className="mr-1 hover:bg-gray-900 px-2 py-2 rounded-full"><IconGif className="text-primary"/></li>
                        <li className="mr-1 hover:bg-gray-900 px-2 py-2 rounded-full"><IconStats className="text-primary"/></li>
                        <li className="mr-1 hover:bg-gray-900 px-2 py-2 rounded-full"><IconEmoji className="text-primary"/></li>
                        <li className="mr-1 hover:bg-gray-900 px-2 py-2 rounded-full"><IconCalendar className="text-primary"/></li>
                    </ul> 
                    <ul className="flex items-center text-sm ">
                        <li className="mr-2 text-gray-900 p-1"> 
                            <IconProgress/>
                        </li>
                        <li className="mr-2 text-1xl text-gray-900"> 
                            |
                        </li>
                        <li className="mr-2 border border-primary rounded-full p-1"> 
                            <IconPlus className="text-primary"/>
                        </li>
                        <li >
                            <PrimaryButton>
                                Tweet
                            </PrimaryButton>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

