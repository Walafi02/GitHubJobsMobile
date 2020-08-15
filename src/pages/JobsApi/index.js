import React from 'react';
import {Linking, Text} from 'react-native';

import {Container, Title, Paragraph} from './styles';

const JobsApi = () => {
  return (
    <Container>
      <Title>The GitHub Jobs API</Title>

      <Paragraph>
        The GitHub Jobs API allows you to search, and view jobs with JSON over
        HTTP
      </Paragraph>

      <Paragraph>
        To get the JSON representation of any search result or job listing,
        append .json to the URL you&apos;d use on the HTML GitHub Jobs site.
      </Paragraph>

      <Paragraph>
        For example, when searching for Python jobs near New York on the site I
        am taken to this url:
      </Paragraph>

      <Paragraph
        hasLink
        onPress={() =>
          Linking.openURL(
            'https://jobs.github.com/positions?description=python&location=new+york'
          )
        }>
        https://jobs.github.com/positions?description=python&location=new+york
      </Paragraph>

      <Paragraph>
        To get the JSON representation of those jobs I just use positions.json:
      </Paragraph>

      <Paragraph
        hasLink
        onPress={() =>
          Linking.openURL(
            'https://jobs.github.com/positions.json?description=python&location=new+york'
          )
        }>
        https://jobs.github.com/positions.json?description=python&location=new+york
      </Paragraph>

      <Title hasSubTitle>Pagination</Title>

      <Paragraph>
        The API also supports pagination. /positions.json, for example, will
        only return 50 positions at a time. You can paginate results by adding a
        page parameter to your queries.
      </Paragraph>

      <Paragraph>Pagination starts by default at 0.</Paragraph>

      <Title hasSubSubTitle>Examples</Title>

      <Paragraph
        onPress={() =>
          Linking.openURL(
            'https://jobs.github.com/positions.json?description=ruby&page=1'
          )
        }>
        <Text>{`\u2022`} </Text>
        <Paragraph hasLink>
          https://jobs.github.com/positions.json?description=ruby&page=1
        </Paragraph>
      </Paragraph>
      <Paragraph
        onPress={() =>
          Linking.openURL(
            'https://jobs.github.com/positions.json?page=1&search=code'
          )
        }>
        <Text>{`\u2022`} </Text>
        <Paragraph hasLink>
          https://jobs.github.com/positions.json?page=1&search=code
        </Paragraph>
      </Paragraph>

      <Title hasSubTitle>GET /positions.json</Title>
      <Paragraph>
        Search for jobs by term, location, full time vs part time, or any
        combination of the three. All parameters are optional.
      </Paragraph>

      <Title hasSubSubTitle>Parameters</Title>

      <Paragraph>
        <Text>{`\u2022`} </Text>
        <Paragraph hasLabel>description</Paragraph> — A search term, such as
        &quot;ruby&quot; or &quot;java&quot;. This parameter is aliased to
        search.
      </Paragraph>

      <Paragraph>
        <Text>{`\u2022`} </Text>
        <Paragraph hasLabel>location</Paragraph> — A city name, zip code, or
        other location search term.
      </Paragraph>

      <Paragraph>
        <Text>{`\u2022`} </Text>
        <Paragraph hasLabel>lat</Paragraph> — A specific latitude. If used, you
        must also send long and must not send location.
      </Paragraph>

      <Paragraph>
        <Text>{`\u2022`} </Text>
        <Paragraph hasLabel>long</Paragraph> — A specific longitude. If used,
        you must also send lat and must not send location.
      </Paragraph>

      <Paragraph>
        <Text>{`\u2022`} </Text>
        <Paragraph hasLabel>full_time</Paragraph> — If you want to limit results
        to full time positions set this parameter to &quot;true&quot;.
      </Paragraph>

      <Title hasSubSubTitle>Examples</Title>

      <Paragraph
        onPress={() =>
          Linking.openURL(
            'https://jobs.github.com/positions.json?description=python&full_time=true&location=sf'
          )
        }>
        <Text>{`\u2022`} </Text>
        <Paragraph hasLink>
          https://jobs.github.com/positions.json?description=python&full_time=true&location=sf
        </Paragraph>
      </Paragraph>

      <Paragraph
        onPress={() =>
          Linking.openURL('https://jobs.github.com/positions.json?search=node')
        }>
        <Text>{`\u2022`} </Text>
        <Paragraph hasLink>
          https://jobs.github.com/positions.json?search=node
        </Paragraph>
      </Paragraph>

      <Paragraph
        onPress={() =>
          Linking.openURL(
            'https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823'
          )
        }>
        <Text>{`\u2022`} </Text>
        <Paragraph hasLink>
          https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823
        </Paragraph>
      </Paragraph>

      <Title hasSubTitle>GET /positions/ID.json</Title>

      <Paragraph>
        Retrieve the JSON representation of a single job posting.
      </Paragraph>

      <Title hasSubSubTitle>Parameters</Title>

      <Paragraph>
        <Text>{`\u2022`} </Text>
        <Paragraph hasLabel>markdown</Paragraph> — Set to &quot;true&quot; to
        get the description and how_to_apply fields as Markdown.
      </Paragraph>

      <Title hasSubSubTitle>Examples</Title>

      <Paragraph
        onPress={() =>
          Linking.openURL('https://jobs.github.com/positions/21516.json')
        }>
        <Text>{`\u2022`} </Text>
        <Paragraph hasLink>
          https://jobs.github.com/positions/21516.json
        </Paragraph>
      </Paragraph>

      <Paragraph
        onPress={() =>
          Linking.openURL(
            'https://jobs.github.com/positions/21516.json?markdown=true'
          )
        }>
        <Text>{`\u2022`} </Text>
        <Paragraph hasLink>
          https://jobs.github.com/positions/21516.json?markdown=true
        </Paragraph>
      </Paragraph>
    </Container>
  );
};

export default JobsApi;
