import {useState, useCallback} from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {GiftedChat, IMessage, Bubble} from 'react-native-gifted-chat';
import {collection, addDoc} from 'firebase/firestore';
import {auth, database} from '../config/firebase';
import {useChatMessages} from '../hooks/useChatMessages';
import colors from '../constants/colors';
const avatarIcon = require('../../assets/avatar.png');

export default function Chat() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  useChatMessages({setMessages});

  const onSend = useCallback((latestMessages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, latestMessages),
    );
    const {_id, createdAt, text, user} = latestMessages[0];
    addDoc(collection(database, 'defaultChat'), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      showUserAvatar={false}
      renderUsernameOnMessage={true}
      renderUsername={user => (
        <Text style={styles.message_sender}>{user._id}</Text>
      )}
      renderBubble={props => (
        <Bubble
          {...props}
          textStyle={{
            right: {color: 'white'},
            left: {color: 'white'},
          }}
          wrapperStyle={{
            right: {backgroundColor: colors.primary},
            left: {backgroundColor: colors.secondary},
          }}
        />
      )}
      renderAvatar={() => <Image source={avatarIcon} style={styles.avatar} />}
      onSend={latestMessages => onSend(latestMessages)}
      messagesContainerStyle={styles.messagesContainerStyle}
      user={{
        _id: auth?.currentUser?.email!,
      }}
    />
  );
}

const styles = StyleSheet.create({
  messagesContainerStyle: {
    backgroundColor: '#fff',
  },
  avatar: {
    width: 24,
    height: 24,
  },
  message_sender: {
    color: colors.gray,
    marginLeft: 12,
  },
});
