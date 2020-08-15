import React from 'react';
import {View, Linking} from 'react-native';

import screenshotEditor from '~/assets/screenshot-editor.png';
import screenshotListing from '~/assets/screenshot-listing.png';
import {cards} from '~/utils/constants';

import {
  Container,
  TextBignote,
  Card,
  Image,
  Title,
  Description,
  Price,
  Cards,
  CardImage,
  ViewBottom,
  ArrowIcon,
} from './styles';

const JobsWorks = () => {
  return (
    <Container>
      <TextBignote>How GitHub Jobs Works</TextBignote>
      <TextBignote>
        GitHub Jobs is a great place attract the best technical talent for your
        company&apos;s open software development positions. Here&apos;s how:
      </TextBignote>

      <Card>
        <Image source={screenshotListing} />

        <Title>Create & preview your listing</Title>
        <Description>
          See exactly how your listing will look before you publish live. Before
          creating a listing, you must login with your GitHub account and verify
          your email address.
        </Description>
      </Card>

      <ArrowIcon />

      <Card>
        <View>
          <Price>$450.00</Price>
          <Description>per listing</Description>

          <Cards>
            {cards.map((card, index) => (
              <CardImage key={String(index)} source={card} />
            ))}
          </Cards>
        </View>

        <Title>Pay with a major credit card</Title>
        <Description>
          Invoicing available on request for bulk orders. Email{' '}
          <Description
            hasLink
            onPress={() => Linking.openURL('mailto:support@example.com')}>
            jobs@github.com
          </Description>{' '}
          for more info. Sorry, no recruitment agencies.
        </Description>
      </Card>

      <ArrowIcon />

      <Card>
        <Image source={screenshotEditor} />

        <Title>Your listing goes live immediately</Title>
        <Description>
          Listings are live for 30 days. We’ll send you a receipt and a link to
          change the listing.
        </Description>
      </Card>

      <ViewBottom>
        <TextBignote>
          Questions? Submit a request via our{' '}
          <TextBignote
            hasLink
            onPress={() =>
              Linking.openURL(
                'https://support.github.com/contact?tags=jobs-support'
              )
            }>
            contact form
          </TextBignote>{' '}
          and let&apos;s talk.
        </TextBignote>
      </ViewBottom>
    </Container>
  );
};

export default JobsWorks;
