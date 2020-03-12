import React from 'react'
import styled from '@emotion/styled'
import { Box } from 'rebass'
import { Container } from './blocks'
import { useColorMode } from 'theme-ui'
import theme from './theme'

const data = {
  sponsors: [
    {
      name: 'GitHub',
      link: 'https://github.com/',
      image:
        'https://sundayhacks.org/static/images/sponsors/github-logo.png'
    },
    {
      name: 'Hack Club Bank',
      link: 'https://hackclub.com/bank',
      image:
        'https://sundayhacks.org/static/images/sponsors/hackclub-bank-logo.png'
    }
  ],
  additionalSupport: [
    {
      name: 'Sticker Mule',
      link: 'https://stickermule.com/',
      image: 
        'https://sundayhacks.org/static/images/sponsors/stickermule-logo.png'
    },
    {
      name: 'Sketch',
      link: 'https://sketchapp.com/',
      image: 'https://sundayhacks.org/static/images/sponsors/sketch-logo.png'
    }
  ]
}

const Base = styled(Box)`
  display: grid;
  grid-row-gap: ${theme.space[2]}px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => (props.section === 'sponsors' ? 256 : 192)}px, 1fr)
  );
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.space[4]}px;
  a {
    width: 100%;
  }
  img {
    max-width: 75%;
    max-height: ${props => (props.section === 'sponsors' ? 6 : 4)}rem;
    ${props =>
      props.colorMode === 'dark' && `filter: invert() hue-rotate(180deg);`}
  }
`

const Sponsors = ({ section = 'sponsors', ...props }) => {
  const [colorMode] = useColorMode()
  return (
    <Base colorMode={colorMode} section={section} {...props}>
      {data[section].map(sponsor => (
        <a href={sponsor.link} target="_blank" key={sponsor.name}>
          <img alt={sponsor.name} src={sponsor.image} />
        </a>
      ))}
    </Base>
  )
}

export default Sponsors
