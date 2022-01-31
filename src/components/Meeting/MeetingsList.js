import {Meeting} from "./Meeting";
import "./MeetingsList.scss";

export const MeetingsList = ({meetings}) => {
    return (
        <ul className={"list"}>
            {
                meetings.map((meeting) => (
                    <Meeting
                        key={meeting.id}
                        id={meeting.id}
                        image={meeting.image}
                        title={meeting.title}
                        address={meeting.address}
                        description={meeting.description}
                    />
                ))
            }
        </ul>
    )
}