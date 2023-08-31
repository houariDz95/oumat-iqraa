import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
 import { auth, db } from '@/firebase';

const UserReview = ({ contentId}) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const user = auth.currentUser;

  const handleLike = async () => {
    if (!liked) {
      setLiked(true);
      setDisliked(false);

      // Add the review to Firebase
      await addDoc(collection(db, 'userReviews'), {
        userId: user.uid,
        contentId,
        like: true,
        dislike: false,
      });
    }
  };

  const handleDislike = async () => {
    if (!disliked) {
      setLiked(false);
      setDisliked(true);

      // Add the review to Firebase
      await addDoc(collection(db, 'userReviews'), {
        userId: user.uid,
        contentId,
        like: false,
        dislike: true,
      });
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleLike}
        disabled={liked}
        className={`p-2 ${liked ? 'text-green-500' : 'text-gray-500 hover:text-green-500'}`}
      >
        <FaThumbsUp />
      </button>
      <button
        onClick={handleDislike}
        disabled={disliked}
        className={`p-2 ${disliked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
      >
        <FaThumbsDown />
      </button>
    </div>
  );
};

export default UserReview;
