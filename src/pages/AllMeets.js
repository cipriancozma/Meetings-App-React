import {MeetingsList} from "../components/Meeting/MeetingsList";
import {useEffect, useState} from "react";

// const data = [
//     {
//         id: "1",
//         title: "Ciprian Meet",
//         image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/a6/54.jpg",
//         address: "Iasi",
//         description: "First meet here"
//     },
//     {
//         id: "2",
//         title: "Ciprian second meet",
//         image:"https://thumbs.dreamstime.com/b/iasi-romania-city-centre-public-garden-as-seen-above-96807448.jpg",
//         address: "Iasi second",
//         description: "Second meet here"
//     },
//     {
//         id: "3",
//         title: "Ciprian third meet",
//         image: "https://www.twentepoort-logistiek.nl/static/default/files/tpl-iasi.jpg",
//         address: "Iasi third",
//         description: "Third meet here"
//     }
// ]


export const AllMeets = () => {
    const [loading, setLoading] = useState(true);
    const [dataMeetings, setDataMeetings] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://meeting-app-react-60e57-default-rtdb.firebaseio.com/meetings.json");
            const data = await response.json();
            const meetings = [];
            for (const key in data) {
                const meeting = {
                    id: key,
                    ...data[key]
                }
                meetings.push(meeting)
            }
            setLoading(false)
            setDataMeetings(meetings);
        } catch (err) {
            console.log("ERR", err)
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [])

    if(loading) {
        return <div>Loading...</div>
    }


    return (
        <section>
            <h1>All My Meetings</h1>
            {
                !loading && <MeetingsList meetings={dataMeetings} />
            }
        </section>
    )
}