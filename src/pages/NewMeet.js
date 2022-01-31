import {NewMeetForm} from "../components/Meeting/NewMeetForm";
import {useNavigate} from "react-router-dom";


export const NewMeet = () => {

    const history = useNavigate();

    const handleAddMeeting = (meetupData) => {
        fetch("https://meeting-app-react-60e57-default-rtdb.firebaseio.com/meetings.json", {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            history("/");
        })
    }

    return (
        <section>
            <h1>Add a new meet</h1>
            <NewMeetForm onAddMeeting={handleAddMeeting} />
        </section>
    )
}