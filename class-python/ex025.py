def break_words(stuff):
    """Split a sentence into words."""
    words = stuff.split(' ')
    return words

def sort_words(words):
    """Sort an array of words"""
    return sorted(words)


def print_first_word(words):
    """Prints the first words after popping it off"""
    word = words.pop(0)
    print(word)

def print_last_word(words):
    """Prints the last words after popping it off"""
    word = words.pop(-1)
    print(word)

def sort_sentence(sentence):
    """Takes a sentence and returns sorted words"""
    words = break_words(sentence)
    return sort_words(words)

def print_first_and_last(sentence):
    words = break_words(sentence)
    print_first_word(words)
    print_last_word(words)

def print_first_and_last_sorted(sentence):
    words = sort_sentence(sentence)
    print_first_word(words)
    print_last_word(words)
