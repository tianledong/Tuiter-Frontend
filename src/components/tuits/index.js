import React from "react";
import './tuits.css';
import Tuit from "./tuit";
import * as likesService from "../../services/likes-service";
import * as service from "../../services/tuits-service";
import * as dislikesService from "../../services/dislikes-service";

/**
 * Component for showing of a lits of tuits.
 * @param tuits list of tuits
 * @param refreshTuits function that fetch new refreshed tuits when any tuits change
 * @return {JSX.Element} <Tuits />
 * @constructor
 */
const Tuits = ({tuits = [], refreshTuits}) => {
    const likeTuit = (tuit) => {
        likesService.userLikesTuit("me", tuit._id)
            .then(refreshTuits)
            .catch(e => alert(e))
    }
    const dislikeTuit = (tuit) => {
        dislikesService.userDislikesTuit("me", tuit._id)
            .then(refreshTuits)
            .catch(e => alert(e))
    }
    const deleteTuit = (tid) =>
        service.deleteTuit(tid)
            .then(refreshTuits);

    return (
        <div>
          <ul className="ttr-tuits list-group">
            {
              tuits && tuits.map(tuit =>
                  <Tuit key={tuit._id}
                        deleteTuit={deleteTuit}
                        likeTuit={likeTuit}
                        dislikeTuit={dislikeTuit}
                        tuit={tuit}/>)
            }
          </ul>
        </div>
      );
}

export default Tuits;