(function() {
  var Animal, Dog, Organism, Person, Primape, lacy, wes, yell,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Organism = (function() {
    function Organism(age, dead, species, family, kingdom) {
      this.age = age;
      this.dead = dead;
      this.species = species;
      this.family = family;
      this.kingdom = kingdom;
    }

    return Organism;

  })();

  Animal = (function(_super) {
    __extends(Animal, _super);

    function Animal(gender, age, dead, species, family) {
      this.gender = gender;
      Animal.__super__.constructor.call(this, age, dead, species, family, "Animalia");
    }

    return Animal;

  })(Organism);

  Primape = (function(_super) {
    __extends(Primape, _super);

    function Primape(gender, age, dead, species) {
      Primape.__super__.constructor.call(this, gender, age, dead, species, "Primape");
    }

    return Primape;

  })(Animal);

  Dog = (function(_super) {
    __extends(Dog, _super);

    function Dog(name, age, gender, dead, species) {
      this.name = name;
      Dog.__super__.constructor.call(this, gender, age, dead, species, "Canus");
    }

    return Dog;

  })(Animal);

  Person = (function(_super) {
    __extends(Person, _super);

    function Person(name, _class, gender, age, dead) {
      this.name = name;
      this["class"] = _class;
      Person.__super__.constructor.call(this, gender, age, dead, "Homo Sapiens");
    }

    Person.prototype.grow = function(years) {
      alert("" + this.name + " has aged " + years + " years");
      return this.age += years;
    };

    return Person;

  })(Primape);

  yell = function(person) {
    var age_string, class_string, dead_string, gender_string;
    age_string = "" + person.name + " " + (person.dead ? "was" : "is") + " " + person.age + ".";
    gender_string = "" + person.name + "  " + (person.dead ? "was" : "is") + " " + person.gender + ".";
    class_string = "" + person.name + " " + (person.dead ? "was" : "is") + " " + person["class"] + "-class.";
    dead_string = "" + person.name + " is " + (person.dead ? "dead" : "alive") + ".";
    return alert("" + age_string + " " + gender_string + " " + class_string + " " + dead_string);
  };

  wes = new Person("Wes", "middle", "Male", 14, false);

  yell(wes);

  wes.grow(3);

  yell(wes);

  alert(wes.species);

  lacy = new Dog("Lacy", 4, "Female", true, "Golden Retriever");

  alert("" + lacy.dead + ", " + lacy.gender + "," + lacy.name + ", " + lacy.age + ", " + lacy.species + ", " + lacy.family + ", " + lacy.kingdom);

}).call(this);
