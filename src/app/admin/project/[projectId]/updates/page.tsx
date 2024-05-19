'use client';
import {
  Avatar,
  Box,
  Button,
  FormLabel,
  HStack,
  Input,
  Text,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import VerticalSpacer from 'components/misc/VerticalSpacer';
import VideoFrame from 'components/video/VideoFrame';
import React, { useState } from 'react';
import { MdReply } from 'react-icons/md';

const ProjectUpdates = ({ params }: any) => {
  const { projectId } = params;
  const textColor = useColorModeValue('navy.700', 'white');
  const [intent, setIntent] = useState('');

  return (
    <>
      <VerticalSpacer />
      <Text fontSize={'xx-large'} fontWeight={'bold'}>
        Project Name
      </Text>
      <Text>ID: {projectId}</Text>
      <br />
      <VideoFrame
        src="https://www.youtube.com/embed/xooLMR6sPxk"
        title="Your Video Title"
      />
      <HStack
        w={'full'}
        alignItems={'center'}
        p={6}
        rounded={8}
        bgColor={'blackAlpha.500'}
      >
        {intent == '' ? (
          <HStack w={'full'} justifyContent={'space-between'}>
            <Text>Have something to say to the editor? Put your comments.</Text>
            <Button
              variant="darkBrand"
              color="white"
              fontSize="xs"
              fontWeight="500"
              size={'sm'}
              rounded={'full'}
              onClick={() => setIntent('comment')}
            >
              Add Comment
            </Button>
          </HStack>
        ) : (
          <Box w={'full'}>
            <HStack
              w={'full'}
              justifyContent={'space-between'}
              flexWrap={'wrap'}
            >
              <Box>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  From
                </FormLabel>
                <HStack gap={6}>
                  <HStack alignItems={'flex-end'}>
                    <Input
                      variant="auth"
                      fontSize="sm"
                      ms={{ base: '0px', md: '0px' }}
                      type="number"
                      placeholder="00"
                      fontWeight="500"
                      size="md"
                      w={16}
                    />
                    <Text fontSize={'sm'}>min.</Text>
                  </HStack>
                  <HStack alignItems={'flex-end'}>
                    <Input
                      variant="auth"
                      fontSize="sm"
                      ms={{ base: '0px', md: '0px' }}
                      type="number"
                      placeholder="00"
                      fontWeight="500"
                      size="md"
                      w={16}
                    />
                    <Text fontSize={'sm'}>sec.</Text>
                  </HStack>
                </HStack>
              </Box>
              <Box>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  To
                </FormLabel>
                <HStack gap={6}>
                  <HStack alignItems={'flex-end'}>
                    <Input
                      variant="auth"
                      fontSize="sm"
                      ms={{ base: '0px', md: '0px' }}
                      type="number"
                      placeholder="00"
                      fontWeight="500"
                      size="md"
                      w={16}
                    />
                    <Text fontSize={'sm'}>min.</Text>
                  </HStack>
                  <HStack alignItems={'flex-end'}>
                    <Input
                      variant="auth"
                      fontSize="sm"
                      ms={{ base: '0px', md: '0px' }}
                      type="number"
                      placeholder="00"
                      fontWeight="500"
                      size="md"
                      w={16}
                    />
                    <Text fontSize={'sm'}>sec.</Text>
                  </HStack>
                </HStack>
              </Box>
            </HStack>
            <br />
            <Box>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Message
              </FormLabel>
              <Textarea
                w={'full'}
                h={'16'}
                ms={{ base: '0px', md: '0px' }}
                resize={'none'}
                mb={8}
              />
              <br />
              <HStack justifyContent={'flex-end'} pb={8}>
                <Button
                  variant="darkBrand"
                  color="white"
                  fontSize="xs"
                  fontWeight="500"
                  size={'md'}
                  rounded={'full'}
                  onClick={() => setIntent('')}
                >
                  Save Comment
                </Button>
              </HStack>
            </Box>
          </Box>
        )}
      </HStack>

      <br />
      <br />
      <Box w={'full'} p={6} rounded={8} bgColor={'blackAlpha.500'}>
        <Text fontSize={'lg'} fontWeight={'bold'}>
          Rececnt Activity
        </Text>
        <br />
        <Box mb={8}>
          <HStack alignItems={'flex-start'}>
            <Avatar name="Krunal Mali" size={'md'} />
            <Box w={'full'}>
              <Text color={textColor} fontWeight={'medium'}>
                Krunal Mali (12 May, 2024)
              </Text>
              <Text color={'purple.400'} fontSize={'xs'}>
                01:23-04:22
              </Text>
              <Text fontSize={'sm'} color={textColor} mt={4}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur veniam minus sunt labore voluptate, delectus
                architecto neque repellendus hic id? Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Aspernatur veniam minus sunt
                labore voluptate, delectus architecto neque repellendus hic id?
              </Text>
            </Box>
          </HStack>
          <HStack w={'full'} justifyContent={'flex-end'} mt={4}>
            <Button
              colorScheme="facebook"
              variant={'ghost'}
              size={'sm'}
              rounded={'full'}
              leftIcon={<MdReply />}
            >
              Add Reply
            </Button>
          </HStack>
        </Box>
        <Box mb={8}>
          <HStack alignItems={'flex-start'}>
            <Avatar name="John Doe" size={'md'} />
            <Box w={'full'}>
              <Text color={textColor} fontWeight={'medium'}>
                John Doe (14 May, 2024)
              </Text>
              <Text color={'purple.400'} fontSize={'xs'}>
                05:28-06:33
              </Text>
              <Text fontSize={'sm'} color={textColor} mt={4}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur veniam minus sunt labore voluptate, delectus
                architecto neque repellendus hic id?
              </Text>
              <HStack w={'full'} justifyContent={'flex-end'} mt={4}>
                <Button
                  colorScheme="facebook"
                  variant={'ghost'}
                  size={'sm'}
                  rounded={'full'}
                  leftIcon={<MdReply />}
                >
                  Add Reply
                </Button>
              </HStack>
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default ProjectUpdates;
