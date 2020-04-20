# Blackjack

# Player Classes

class Player
    attr_accessor :name
    attr_accessor :bankroll
    attr_accessor :hand
    def initialize name
        @name = name
        @bankroll = 100
        @hand = []
    end 

    def name
        @name
    end

end

class Dealer
    attr_reader :name
    attr_accessor :bankroll, :hand
    def initialize name
        @name = 'Dealer'
        @bankroll = 1000
        @hand = []
    end 


end


# Empty deck

def deck
    deck = []
end

# Cards

class Cards
    attr_reader :face,:value
    def initialize face, value, suits
        @face = face
        @value = value
        @suits = suits
    end
end

# Create the deck of cards. 
# Needs 4 sets of 13 cards 2 through Ace
def create_deck deck
    suits = ['clubs', 'spades', 'hearts', 'diamonds']
    values = [ ['2',2], ['3', 3], ['4',4], ['5',5], ['6', 6], ["7", 7], ["8", 8], ["9", 9], ['10', 10], ['Jack', 10], ['Queen', 10], ['King', 10], ['Ace', 11]]

    suits.each {|suit|
        
        values.each{ |number|
            card = Cards.new number[0], number[1], suit
            p card
            deck.push(card)
        }
        
    }

    p deck
end

create_deck(deck)

