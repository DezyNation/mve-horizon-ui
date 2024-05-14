import { Box } from '@chakra-ui/react';

interface VideoFrameProps {
  src: string;
  title?: string;
}

const VideoFrame = ({ src, title }: VideoFrameProps) => (
  <Box position="relative" width="100%" paddingBottom="56.25%" mb={8}>
    <iframe
      title={title || "No title"}
      src={src}
      allowFullScreen
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      }}
    />
  </Box>
);

export default VideoFrame;
