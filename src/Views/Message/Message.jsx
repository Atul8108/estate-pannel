import React from 'react'
import Header from '../../components/Header/Header'

const Message = () => {
  // const [property, setProperty] = useState([
  //   {
  //     cost: '£200',
  //     name: 'The Ritz London',
  //     location: 'London, UK',
  //     image: 'https://thumbs.dreamstime.com/z/futuristic-high-tech-background-business-office-modern-buildings-futuristic-high-tech-background-perspective-business-office-113657393.jpg?w=2048',
  //     numberOfBeds: 1,
  //     available: true,
  //   },
  //   {
  //     cost: "$300",
  //     name: 'The Plaza Hotel, New York City',
  //     location: 'New York City, USA',
  //     image: "https://thumbs.dreamstime.com/z/construction-buildings-17322972.jpg?w=992",
  //     numberOfBeds: 1,
  //     available: true,
  //   },
  //   {
  //     cost: "€100",
  //     name: 'The Louvre Hotel, Paris',
  //     location: 'Paris, France',
  //     image: "https://thumbs.dreamstime.com/z/alley-modern-office-buildings-budapest-area-33123043.jpg?w=992",
  //     numberOfBeds: 1,
  //     available: true,
  //   },
  //   {
  //     cost: "¥5,000",
  //     name: 'The Imperial Hotel, Tokyo',
  //     location: 'Tokyo, Japan',
  //     image: "https://thumbs.dreamstime.com/z/modern-office-buildings-21871865.jpg?w=768",
  //     numberOfBeds: 7,
  //     available: true,
  //   },
  //   {
  //     cost: "₹10,000",
  //     name: 'The Taj Mahal Palace, Mumbai',
  //     location: 'Mumbai, India',
  //     image: "https://thumbs.dreamstime.com/z/skyscraper-buildings-15280009.jpg?w=992",
  //     numberOfBeds: 8,
  //     available: true,
  //   },
  //   {
  //     cost: "₩100,000",
  //     name: 'The Shilla Seoul',
  //     location: 'Seoul, South Korea',
  //     image: "https://thumbs.dreamstime.com/z/la-d%C3%A9fence-buildings-9-15876837.jpg?w=992",
  //     numberOfBeds: 1,
  //     available: true,
  //   },
  //   {
  //     cost: "A$500",
  //     name: 'QT Sydney',
  //     location: 'Sydney, Australia',
  //     image: "https://thumbs.dreamstime.com/z/buildings-montreal-400191.jpg?w=768",
  //     numberOfBeds: 11,
  //     available: true,
  //   },
  //   {
  //     cost: "NZ$300",
  //     name: 'The Langham, Auckland',
  //     location: 'Auckland, New Zealand',
  //     image: "https://thumbs.dreamstime.com/z/highrise-buildings-image-some-great-55477231.jpg?w=992",
  //     numberOfBeds: 4,
  //     available: true,
  //   },
  //   {
  //     cost: " C$200",
  //     name: 'The Fairmont Royal York, Toronto',
  //     location: 'Toronto, Canada',
  //     image: "https://thumbs.dreamstime.com/z/office-buildings-surrounding-japanese-garden-26487483.jpg?w=992",
  //     numberOfBeds: 13,
  //     available: true,
  //   },
  //   {
  //     cost: "R$1000",
  //     name: 'Fasano Rio de Janeiro',
  //     location: 'Rio de Janeiro, Brazil',
  //     image: "https://thumbs.dreamstime.com/z/office-buildings-surrounding-japanese-garden-26487483.jpg?w=992",
  //     numberOfBeds: 1,
  //     available: true,
  //   },
  //   {
  //     cost: "ZAR1,500",
  //     name: 'The Saxon Boutique Hotel, Cape Town',
  //     location: 'Cape Town, South Africa',
  //     image: "https://thumbs.dreamstime.com/z/apartment-buildings-apartment-buildings-white-sky-97830989.jpg?w=768",
  //     numberOfBeds: 5,
  //     available: true,
  //   },
  //   {
  //     cost: '£200',
  //     name: 'The Ritz London',
  //     location: 'London, UK',
  //     image: 'https://thumbs.dreamstime.com/z/new-singapore-government-apartments-beautiful-31700623.jpg?w=2048',
  //     numberOfBeds: 1,
  //     available: true,
  //   },
  //   {
  //     cost: '$300',
  //     name: 'The Plaza Hotel, New York City',
  //     location: 'New York City, USA',
  //     image: 'https://thumbs.dreamstime.com/z/luxury-home-residential-development-58984288.jpg?w=992',
  //     numberOfBeds: 22,
  //     available: true,
  //   },
  //   {
  //     cost: '€100',
  //     name: 'The Louvre Hotel, Paris',
  //     location: 'Paris, France',
  //     image: 'https://thumbs.dreamstime.com/z/business-buildings-21086363.jpg?w=576',
  //     numberOfBeds: 1,
  //     available: true,
  //   },
  //   {
  //     cost: '¥5,000',
  //     name: 'The Imperial Hotel, Tokyo',
  //     location: 'Tokyo, Japan',
  //     image: 'https://thumbs.dreamstime.com/z/business-buildings-10378811.jpg?w=768',
  //     numberOfBeds: 1,
  //     available: true,
  //   },
  //   {
  //     cost: '₹10,000',
  //     name: 'The Taj Mahal Palace, Mumbai',
  //     location: 'Mumbai, India',
  //     image: 'https://thumbs.dreamstime.com/z/modern-office-buildings-21951621.jpg?w=2048',
  //     numberOfBeds: 1,
  //     available: true,
  //   },
  //   {
  //     cost: '₩100,000',
  //     name: 'The Shilla Seoul',
  //     location: 'Seoul, South Korea',
  //     image: 'https://thumbs.dreamstime.com/z/skyscrapers-4867248.jpg?w=768',
  //     numberOfBeds: 1,
  //     available: true,
  //   },
  //   {
  //     cost: 'A$500',
  //     name: 'QT Sydney',
  //     location: 'https://thumbs.dreamstime.com/z/skyscraper-5802589.jpg?w=768',
  //     numberOfBeds: 1,
  //     available: true,
  //   },
  //   {
  //     cost: 'NZ$300',
  //     name: 'The Langham, Auckland',
  //     location: 'Auckland, New Zealand',
  //     image: 'https://thumbs.dreamstime.com/z/canary-wharf-14440961.jpg?w=576',
  //     numberOfBeds: 1,
  //     available: true,
  //   },
  //   {
  //     cost: 'C$200',
  //     name: 'The Fairmont Royal York, Toronto',
  //     location: 'Toronto, Canada',
  //     image: 'https://thumbs.dreamstime.com/z/shaar-ramat-gan-tel-aviv-il-7082605.jpg?w=576',
  //     numberOfBeds: 1,
  //     available: true,
  //   }

  // ])

  // console.log(property)
  return (
    <>
        <section className="main-layout">
                <Header />
                <div className='page-content'>
                    <p>Message page</p>
                </div>
            </section>
    </>
  )
}

export default Message