import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import {MeetingsList} from "../components/Meeting/MeetingsList";

export const FavoritesMeets = () => {
    const favoritesContext = useContext(FavoritesContext);

    let content;

    if(favoritesContext.totalFavorites === 0) {
        content = <p>No Favorites yet</p>
    } else {
        content =  <MeetingsList meetings={favoritesContext.favorites} />
    }
    return (
        <div>
            <h1>My Favorites</h1>
            {content}
        </div>
    )
}