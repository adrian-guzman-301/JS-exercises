class TicketType {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }

  addAvailableTickets(name, price) {
    // Add your code here
    const existingTicket = this.availableTickets.find(ticket => ticket.name === name)
    if(existingTicket) {
      console.warn(`Ticket type ${name} already exists.`)
    }
    this.availableTickets.push({name, price});
  }

  allTickets() {
    // Add your code here
    if(this.availableTickets.length === 0) {
      return `${this.name} - has no tickets available.`;
    }
    const tickets = this.availableTickets.map((ticket, index) => `${ticket.name}: ${ticket.price}`).join(' ')
    return `${this.name} tickets: ${tickets}`
  }

  searchTickets(lower, upper) {
    // Add your code here
  }
}

//event
const TechtonicaGradParty = new Event('Techtonica Graduation Party', 'Graduation for the Part 1 grads, December 2025')
const ThanksgivingDinnerParty = new Event('TDay Bash', 'Party for all folks not going home')