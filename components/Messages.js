import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis"
import Message from "./Message";
import SendMessage from "./SendMessage";

// Only show messages from the last 15 minutes
const MINS_DURATION = 15;
function Messages() {
    const { user } = useMoralis();
    const endOfMessages = useRef(null);
    const { data, loading, error } = useMoralisQuery(
        'Messages',
        (query) => query.ascending('createdAt')
            .greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * MINS_DURATION)),
            [],
            {
                live: true,
            }
    );

    console.log(data)

    return (
        <div className="pb-56">
            <div className="my-5">
                <ByMoralis
                    style={{ marginLeft: 'auto', marginRight: 'auto' }}
                    variant="dark"
                />
            </div>
            
            <div className="spacing-y-10 p-4">
                {
                    data.map(message => (
                        <Message key={message.id} message={message} />
                    ))
                }
            </div>

            <div className="flex justify-center">
                <SendMessage endOfMessages={endOfMessages} />
            </div>

            <div ref={endOfMessages} className="text-center text-gray-400 mt-5">
                <p>You're up to date {user.getUsername()} 🎉</p>
            </div>
        </div>
    )
}

export default Messages
