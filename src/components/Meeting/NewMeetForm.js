
import "./NewMeetingForm.scss";
import {Card} from "../ui/Card";
import {useRef} from "react";

export const NewMeetForm = ({onAddMeeting}) => {

    const titleRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredTitle = titleRef.current.value;
        const enteredImage = imageRef.current.value;
        const enteredAddress = addressRef.current.value;
        const enteredDescription = descriptionRef.current.value;

        const meetingData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        onAddMeeting(meetingData);

    }

    return (
        <Card>
            <form className={"form"} onSubmit={handleSubmit}>
                <div className={"control"}>
                    <label htmlFor={"title"}>Meeting Title</label>
                    <input type={"text"} required id={"title"} ref={titleRef} />
                </div>
                <div className={"control"}>
                    <label htmlFor={"url"}>Meeting Image</label>
                    <input type={"url"} required id={"image"} ref={imageRef}/>
                </div>
                <div className={"control"}>
                    <label htmlFor={"address"}>Meeting Address</label>
                    <input type={"text"} required id={"address"} ref={addressRef}/>
                </div>
                <div className={"control"}>
                    <label htmlFor={"description"}>Meeting Description</label>
                    <textarea required id={"description"} rows={"5"} ref={descriptionRef}></textarea>
                </div>
                <div className={"actions"}>
                    <button>Add meeting</button>
                </div>
            </form>
        </Card>
    )
}
