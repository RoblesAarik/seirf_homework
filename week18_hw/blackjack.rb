# Blackjack

# Player Classes

class Player
    attr_accessor :name, :bankroll, :hand, :sum
    def initialize name
        @name = name
        @bankroll = 100
        @hand = []
        @sum = sum
    end 

    def name=value
        @name=value
    end

    def player_hand deck
        self.hand.push(deck[0])
        deck.shift
    end

    def sum
        if self.hand.length == 0
            sum = 0
        else
        @sum = self.hand[0].value + self.hand[1].value
        end
    end

    def bet
        @bankroll = self.bankroll - 10
        p "You bet $10. You now have $#{self.bankroll}"
     end
end



class Dealer
    attr_reader :name
    attr_accessor :bankroll, :hand
    def initialize
        @name = 'Dealer'
        @bankroll = 10000
        @hand = []
        @sum = sum
    end 

    def dealer_hand deck
        self.hand.push(deck[0])
        deck.shift
    end

    def sum
        if self.hand.length == 0
            @sum = 0
        else
        @sum = self.hand[0].value + self.hand[1].value
        end
    end

    


end



# create new player
def create_players
    name = gets.chomp
    $player1 = Player.new name
    $dealer1 = Dealer.new
    # p $player1
    # p $dealer1
end



# Cards

class Cards
    attr_reader :face,:value, :suits
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
            deck.push(card)
        }
        
    }

end

 

# Shuffle deck
def shuffle deck
    deck.shuffle!
end


# get deck and shuffle cards
def ready_cards deck
create_deck deck
shuffle deck
# p deck.length
end


# Deal cards
def deal_cards deck
    $player1.player_hand deck
    $dealer1.dealer_hand deck
    $player1.player_hand deck
    $dealer1.dealer_hand deck
    p "Your cards: #{$player1.hand[0].face} of #{$player1.hand[0].suits} and #{$player1.hand[1].face} of #{$player1.hand[1].suits}"
    p "Dealers has a #{$dealer1.hand[1].face} of #{$dealer1.hand[1].suits}"
end




# Game Logic

def check_win
    if $player1.sum > $dealer1.sum
        $player1.bankroll = $player1.bankroll + 20
        p "You win! You now have $#{$player1.bankroll}"
    elsif $player.sum < $dealer1.sum
        p "Dealer wins"
    elsif $player1.sum == $dealer1.sum
        $player1.bankroll = $player1.bankroll + 10
        p "Tie try again, You now have $#{$player1.bankroll}"
    end
    p "Your score: #{$player1.sum}"
    p "Dealer Score: #{$dealer1.sum}"
end

def start_game
    create_players
    p "Welcome #{$player1.name}"
end

def rounds
    deck =[]
    ready_cards deck
    deal_cards deck
    $player1.bankroll = $player1.bankroll - 10
    p "You bet $10, You now have $#{$player1.bankroll}"
    check_win
   
end



start_game
rounds
