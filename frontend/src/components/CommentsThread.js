import { Component } from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import Comment from './Comment';
import ThemedBox from './ThemedBox';

class CommentsThread extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showReplies: true,
    };
  }

  toggleShowReplies = () =>
    this.setState((prevState) => ({ showReplies: !prevState.showReplies }));

  render() {
    const { showReplies } = this.state;
    const { comments } = this.props;
    const commentsToDisplay = comments.map(
      ({ body, created_at, author_name, votes, children }, idx) => (
        <Box key={`${body}-${idx}`} mt={4}>
          <Comment
            my={2}
            body={body}
            createdAt={created_at}
            author={author_name}
            numVotes={votes}
          />
          {children.length > 0 && (
            <Button variant="link" onClick={this.toggleShowReplies}>
              {showReplies
                ? 'Hide replies'
                : `Show ${children.length} ${
                    children.length > 1 ? 'replies' : 'reply'
                  }`}
            </Button>
          )}
          {showReplies && (
            <Flex direction="row">
              {children.length > 0 && (
                <Box
                  alignSelf="stretch"
                  p={2}
                  role="group"
                  _hover={{ cursor: 'pointer' }}
                  onClick={this.toggleShowReplies}
                >
                  <ThemedBox
                    w={1}
                    h="100%"
                    _groupHover={{ backgroundColor: 'orange.400' }}
                  />
                </Box>
              )}
              <Box flexGrow={1} ml={4}>
                <CommentsThread comments={children} />
              </Box>
            </Flex>
          )}
        </Box>
      )
    );
    return commentsToDisplay;
  }
}

export default CommentsThread;
