import {useLayoutEffect} from 'react';
import {IMessage} from 'react-native-gifted-chat';
import {collection, orderBy, query, onSnapshot} from 'firebase/firestore';
import {database} from '../config/firebase';

type SetMessages = React.Dispatch<React.SetStateAction<IMessage[]>>;

type Props = {setMessages: SetMessages};

export const useChatMessages = ({setMessages}: Props) => {
  useLayoutEffect(() => {
    const collectionRef = collection(database, 'defaultChat');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      setMessages(
        querySnapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        })),
      );
    });
    return unsubscribe;
  }, [setMessages]);
};
