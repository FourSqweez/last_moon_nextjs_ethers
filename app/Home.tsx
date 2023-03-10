'use client'
import React from 'react'
import { Card, Center, Container, Image, Text } from '@mantine/core'

const Home = () => {
  return (
    <Container size="xl" py="xl">
      <Card
        withBorder
        shadow="sm"
        p="xs"
        component="a"
        py="xs"
        style={{ width: '300px', height: '400px' }}>
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            height={160}
            alt="No way!"
          />
        </Card.Section>

        <Text weight={500} size="lg" mt="md">
          You&apos;ve won a million dollars in cash!
        </Text>

        <Text mt="xs" color="dimmed" size="sm">
          Please click anywhere on this card to claim your reward, this is not a
          fraud, trust us
        </Text>
      </Card>
    </Container>
  )
}

export default Home
