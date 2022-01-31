import {createContext, useState} from "react";

const FavoritesContext =  createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeeting) => {},
    removeFavorite: (meetingId) => {},
    itemFavorite: (meetingId) => {}
});

export function FavoritesContextProvider({children}) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeeting) {
        setUserFavorites((prevUserFavorite) => {
            return prevUserFavorite.concat(favoriteMeeting)
        })
    }

    function removeFavoriteHandler(meetingId) {
        setUserFavorites((prevUserFavorite) => {
            return prevUserFavorite.filter(meeting => meeting.id !== meetingId)
        })
    }

    function itemIsFavorite(meetingId) {
        return userFavorites.some(meeting => meeting.id === meetingId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemFavorite: itemIsFavorite
    }

    return <FavoritesContext.Provider value={context}>
        {children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;

