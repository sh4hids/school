import apple

apple.apple()
print(apple.tangerine)


class MyStuff(object):
    def __init__(self):
        self.tangerine = "In my stuff a tangerine"

    def apple(self):
        print("I am a classy Apple!")


thing  = MyStuff()
thing.apple()
print(thing.tangerine)


class Song(object):

    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


happy_bday = Song(["Happy birthday to you",
                    "I don't want to get sued",
                    "So I'll stop right there"])

bulls_on_parade = Song(["They rally around the family",
                        "With pocket full of shells"])

happy_bday.sing_me_a_song()
bulls_on_parade.sing_me_a_song()

