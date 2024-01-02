import { Avatar, Box, Divider, Flex, Text } from '@chakra-ui/react';
import { InMessage } from '@/models/message/in_message';
import convertDateToString from '@/utils/convert_date_to_string';

interface Props {
  uid: string;
  displayName: string;
  isOwner: boolean;
  item: InMessage;
  photoURL: string;
}

const MessageItem = function ({ photoURL, displayName, item }: Props) {
  const haveReply = item.reply !== undefined;
  return (
    <Box borderRadius="md" width="full" bg="white" boxShadow="md">
      <Box>
        <Flex pl="2" pt="2" alignItems="center">
          <Avatar
            size="xs"
            src={item.author ? item.author.photoURL ?? 'https://bit.ly/broken-link' : 'https://bit.ly/broken-link'}
          />
          <Text fontSize="xx-small" ml="1">
            {item.author ? item.author.displayName : '익명'}
          </Text>
          <Text whiteSpace="pre-line" fontSize="xx-small" color="gray.500" ml="1">
            {convertDateToString(item.createAt)}
          </Text>
        </Flex>
      </Box>
      <Box p="2">
        <Box borderRadius="md" borderWidth="2px" p="2">
          <Text whiteSpace="pre-line" fontSize="sm">
            {item.message}
          </Text>
        </Box>
        {haveReply && (
          <Box pt="2">
            <Divider />
            <Flex alignItems="center">
              <Box display="flex" mt="2" />
              <Box pt="2">
                <Avatar size="xs" src={photoURL} mr="2" />
              </Box>
              <Box borderRadius="md" mt="2" p="2" width="full" bg="gray.100">
                <Text fontSize="xs">{displayName}</Text>
                <Text whiteSpace="pre-line" fontSize="xs" color="gray">
                  {convertDateToString(item.replayAt)}
                </Text>
                <Text whiteSpace="pre-line" fontSize="xs">
                  {item.reply}
                </Text>
              </Box>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MessageItem;
