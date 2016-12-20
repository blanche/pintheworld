from google.appengine.ext import ndb


class Player(ndb.Model):
    name = ndb.StringProperty()


class City(ndb.Model):
    name = ndb.StringProperty()
    long = ndb.FloatProperty()
    lat = ndb.FloatProperty()


# linked to game via ancestor/parent
class Highscore(ndb.Model):
    player = ndb.KeyProperty(kind=Player)
    score = ndb.FloatProperty()


# linked to game via ancestor/parent
class Guess(ndb.Model):
    city = ndb.KeyProperty(kind=City)
    player = ndb.KeyProperty(kind=Player)
    long = ndb.FloatProperty()
    lat = ndb.FloatProperty()
    score = ndb.FloatProperty()
    remaining_time = ndb.IntegerProperty()


class Game(ndb.Model):
    noOfPlayers = ndb.IntegerProperty()
    players = ndb.KeyProperty(kind=Player, repeated=True)
    cities = ndb.KeyProperty(kind=City, repeated=True)

    def todict(self):
        x = self.to_dict()
        x['id'] = self.key.id()
        return x


class Counter(ndb.Model):
    param = ndb.StringProperty()
    count = ndb.IntegerProperty(indexed=False)

    @classmethod
    def howmany(cls, key):
        return cls.query(Counter.param == key).count()
