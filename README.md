# Goal
This is a technical assignment that was given to me, as part of the recruiting process for a VueJS developer position.
Below you can find the business case of the application and also the technical requirements.

# Business Case
At X Company, we aim to build the platform for the circular economy. This
encompasses collection, transportation and re-selling of waste and products created
from them. A strong technical backbone and usability are key to the success of the
platform! And with good design, we add our own flavor!

## Context
In order to pick up waste and drop off empty containers as efficiently as possible,
the drivers use the driver application.

This application displays them the optimal route they have to drive for their days
worth of pickups and dropoffs. In addition, for each stop, they get to note the
number of pickups of each waste type (=stream) they did. This is an important
step, as it helps us invoice the correct amounts to the customer.

A stop translates to a customer location, such as a cafe or restaurant. At a stop, a
driver may drop off or pick up multiple containers of different waste streams.

## Assignment
As part of the driver application, we need an optimal interface to complete a stop.
Create a single page view, which let’s a driver process one stop and the orders
within it.

## Data Source
- See lib/data/driver_sample_route.json
- A route has multiple stops, where each stop can have one or more orders. Each order is either a pickup or a dropoff order.
- Each stop has some variation in data available. The UI should work for each
of these stops.

## Value Lookup
- Route / Stop / Order Status values:
  - 0 = new
  - 1 = pending
  - 2 = scheduled
  - 3 = in progress
  - 4 = completed
- Order Type:
  - 0 = pickup
  - 1 = dropoff
- Issue Type:
  - 0 = other
  - 1 = wrong quantity ordered
  - 2 = wrong container type
  - 3 = container not accessible
  
### Driver User Stories
- As a driver, I want to be able to see all the core information relevant to the
stop I am currently at (=name of customer, address, comment, orders (type,
quantity))
- As a driver, I want to be able to call the customer of a stop, if they provided a
phone number
- As a driver, I want to be able to confirm that I have picked up/dropped off an
order
- As a driver, I want to report an issue, if I encounter a problem with an
order/stop (see issue types)
- As a driver, I want to be able to adjust the quantity of an order, if the ordered
quantity varied from what I picked up/dropped off
- As a driver, I want the user interface to be simple, as I am not very computer
savvy
- As a driver, I want the user interface to give me all the information at a
glance, as I am used to working in an analogue way (all information on a
single piece of paper)
- As a driver, I want to feel satisfaction when completing a task, which
intrinsically motivates me to use the application

### Technical restrictions
- Target device
  - Mobile & Tablet (responsive)
- Suggested Frameworks
  - VueJS/NuxtJS
  - TailwindCSS
  

# Developer notes

## Features implemented (nice-to-haves)
- use of layouts
- svgs as components for dynamic colors via props
- nuxt module for google fonts
- mockAPI for backend simulation
- error handling (no stops found)
- custom tailwind collapse
- expand-all button for print-like view
- show check button conditionally

## Scenario assumptions / notes
- user is already logged in
- the order of the stops is already optimized from backend and Google API
- i18n is not implemented
- navigation menu is not doing anything
- modal actions are not doing anything, since they should end up as API calls to backend
- issue reporting was implemented along with quantity reporting since both are logically connected
- not sure what the order status is when an issue is reported

## Setup

create a .env file with the following content

```API_URL=https://5a61e7a66d8c840012d61632.mockapi.io```

> npm install

> npm run dev