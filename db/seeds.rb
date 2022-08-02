# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "🌱 Seeding spices..."

#Recipe

hawaiian_Island_Fried_Rice = Recipe.create(name: "Hawaiian Island fried Rice", image: "https://savoryspicerack.com/wp-content/uploads/DSC_0288.jpg", description: "Essentially, fried rice made with whatever leftovers you have in your fridge; traditionally, proteins made with this would be Spam, Portuguese sausage, and char siu.", cooking_time: "25 min", servings: 7, cuisine: "Hawaiian")
mochiko_Chicken = Recipe.create(name:"Mochiko Chicken", image:"https://www.tasteofhome.com/wp-content/uploads/2020/10/Mochiko-Chicken-HF.jpg?resize=768,768",description: "Mochiko chicken is Hawaii's version of popcorn chicken. Bite-size pieces of chicken marinated in a mochiko flour mixture and deep-fried.",cooking_time:"6 hrs 35 mins",servings: 6, cuisine:"Hawaiian")
haupia = Recipe.create(name: "Haupia",image:"https://www.favfamilyrecipes.com/wp-content/uploads/2020/07/Haupia-recipe-vertical-375x288.jpg",description: "Haupia is a classic Hawaiian dessert that's like a cross between coconut pudding and jelly.Lightly sweet and made primarily from coconut milk, haupia is served chilled and cut into squares, and it's like little refreshing bites of Hawaii!", cooking_time: "2 hrs 15 mins", servings: 16, cuisine: "Hawaiian")
rourou = Recipe.create(name: "Rourou", image:"http://thegentlemansplate.com/wp-content/uploads/2016/06/Fijian-Roro-Hero.jpg",description: "Rourou is a traditional Fijian dish prepared from taro leaves stewed in coconut milk. The simple Rourou is usually served either as a soup or a side dish in balls form accompanying various fish or chicken dishes and boiled cassava.", cooking_time: "35 mins", servings: 2, cuisine: "Fijian")
kokoda = Recipe.create(name: "Kokoda", image: "https://foreignfork.com/wp-content/uploads/2021/04/kokoda-8-768x1152.jpg",description: "Kokoda is a form of Fish Cevice that is served with coconut milk in order to balance out the acidity of the lime juice.",cooking_time:"6 hrs 20 mins ", servings: 4, cuisine:"Fijian",)
purini = Recipe.create(name: "Purini", image:"https://i1.wp.com/pacificislandrecipe.com/wp-content/uploads/2017/02/purini-in-custard.jpg",description: "This is a Typical Fijian dessert the main elements include cassava starch, brown sugar and coconut cream.",cooking_time: "1 hrs 30 mins", servings: 10, cuisine:"Fijian" )
fungi = Recipe.create(name: "Fungi and Saltfish", image: "http://www.wadadlistyle.com/wp-content/uploads/2019/04/Screenshot-2019-04-26-13.02.16.png", description: "Antiguan fungie is created using cornmeal and okra paste which are shaped into balls and then cooked together. Saltfish is usually cooked and served as a side dish along with another traditional Antiguan dish, Chop-up.", cooking_time:" 1 hr 20 mins", servings: 4, cuisine: "Antiguan, Caribbean")
duncana = Recipe.create(name: "Duncana", image:"https://foreignfork.com/wp-content/uploads/2018/10/7585691552_IMG_8375.jpg",description: "Duncanc are dumplings made with sweeet potato, coconut and cinnamon. Form the mixture into a dumplings,wrap in a banana leaves and secure with twine and then boil.", cooking_time: "1 hr 5mins ", servings: 10, cuisine: "Antiguan")
black_Pineapple = Recipe.create(name:"Pineapple Salad with Sweet Rum Drizzle", image:"https://www.internationalcuisine.com/wp-content/uploads/2014/05/Antigua-pineapple-salad-1024x685.jpg",description: "Antigua is known for its very sweet and juicy black pineapple. The simple salad incorporates just a honey and rum drizzle that adds a great flavor to the pineapple; serve them in boats for a pleasant tropical feel.",cooking_time: "10 mins", cuisine: "Antiguan")
lawar = Recipe.create(name:"Lawar", image:"https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2021/07/kkc71c.jpg",description: "Lawar is made by mixing chopped meat with various green vegetables and grated coconut. As for the meat, the choices are beef, chicken, duck, pork, turtle, or a combination of those.", cooking_time: "60 mins", servings: 4, cuisine: "Balinese")
tum = Recipe.create(name:"Tum Ayam",image:"https://whattocooktoday.com/wp-content/uploads/2021/09/tum-ayam-18.jpg",description: "These little packets of spiced meat steamed or baked in banana leaves are one of the Balinese cuisine’s real treats. ‘Tum’ can contain any kind of meat and is usually served with rice and vegetables.", cooking_time: "40 mins", servings: 6, cuisine:" Balinese")
coconut_Pancakes = Recipe.create(name:"Dadar Gulung",image:"https://www.wandercooks.com/wp-content/uploads/2020/08/dadar-gulung-indonesian-coconut-pancake-3.jpg",description: "This traditional dessert is similar to a pancake, but Balinese style. Dadar Gulung is made from rice flour and coconut milk and served with grated coconut and a little sugar on top. Dadar Gulung is usually green, thanks to the addition of the Pandan leaf.", cooking_time: "25 mins", servings: 10, cuisine: "Balinese,Indonesian")
whiteBait = Recipe.create(name:"WhiteBait Fritters",image:"https://padcook.com/wp-content/uploads/2020/01/c3.jpg",description: "Whitebait fritters are tiny freshwater fish in a batter. Fish is a huge part of the New Zealand diet, mainly because so many Kiwis enjoy going out on fishing trips.", cooking_time: "10 mins", servings: 4, cuisine: "New Zealand")
pavlova = Recipe.create(name:"New Zealand Pavlova",image:"https://www.thespruceeats.com/thmb/XgnU04MihUFnAW-JDtV8fzL82cM=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-489765636-5a8c47a38023b900379628b5.jpg",description: "Pavlova is a traditional dessert in New Zealand, and Australia claims it as well. It has a crisp outside and melt-in-your-mouth meringue base that can be filled with any kind of fresh berries or kiwi fruit you like, and then topped with whipped cream.",cooking_time:"60 mins",servings: 6, cuisine:"New Zealand")

#Ingredients

char_sui_pork = Ingredient.create(name:"Char sui pork")
portuguese_sausage = Ingredient.create(name:"Portuguese sausage")
bacon = Ingredient.create(name:"bacon")
shrimp = Ingredient.create(name:"shrimp")
onion = Ingredient.create(name:"Onion")
eggs = Ingredient.create(name:"eggs")
garlic = Ingredient.create(name:"garlic cloves")
cookinhg_Oil = Ingredient.create(name:"cooking oil")
white_Rice = Ingredient.create(name:"white rice")
ginger_Powder = Ingredient.create(name:"ginger powder")
green_Onion = Ingredient.create(name:"green onion")
soy_Sauce = Ingredient.create(name:"soy sauce")
cheese = Ingredient.create(name:"cheese")
mahi = Ingredient.create(name:"Mahi Mahi")
lime_jucie = Ingredient.create(name:"lime juice")
coconut_milk= Ingredient.create(name:"coconut milk")
tomatoes = Ingredient.create(name:"tomatoes")
green_pepper = Ingredient.create(name:"green pepper")
red_onion = Ingredient.create(name:"red onion")
english_Cucumber = Ingredient.create(name:"English Cucumber")
parsley = Ingredient.create(name:"parsely")
jalapeno = Ingredient.create(name:"jalapeno")
kosher_salt = Ingredient.create(name:"Kosher salt")
black_pepper=Ingredient.create(name:"black pepper")
coconut = Ingredient.create(name:"coconut")
butter_lettuce = Ingredient.create(name:"Butter Lettuce")
plain_flour = Ingredient.create(name:"plain flour")
baking_powder = Ingredient.create(name:"baking powder")
baking_soda = Ingredient.create(name:"baking soda")
sugar = Ingredient.create(name:"suagr")
coconut_cream = Ingredient.create(name:"coconut cream")
nutmeg = Ingredient.create(name:"nutmeg")
cinnamon = Ingredient.create(name:"cinnamon")
ground_clove= Ingredient.create(name:"ground clove")
mochiko = Ingredient.create(name:"mochiko flour")
cornstarch = Ingredient.create(name:"cornstarch")
chicken_thigh = Ingredient.create(name:"chicken thigh")
chicken_breast = Ingredient.create(name:"chicken breast")
seasame_seed = Ingredient.create(name:"sesame seed")
sweet_potato = Ingredient.create(name:"sweet potato")
vanilla = Ingredient.create(name:"vanilla")
water = Ingredient.create(name:"water")
banana_leaves = Ingredient.create(name:"banana leaves")
honey = Ingredient.create(name:"honey")
black_PineappleI = Ingredient.create(name:"black pineapple")
dark_rum = Ingredient.create(name:"dark rum")
green_bean = Ingredient.create(name:"green bean")
mung_bean_sprouts = Ingredient.create(name:"mung bean sprout")
thai_chill = Ingredient.create(name:"thai chilli")
shrimp_paste = Ingredient.create(name:"shrimp paste")
shallots= Ingredient.create(name:"shallots")
coriander_seeds = Ingredient.create(name:"coriander seeds")
coconut_sugar = Ingredient.create(name:"coconut sugar")
bay_leaf = Ingredient.create(name:"bay leaf")
bawang_goreng = Ingredient.create(name:"bawang gorreng")
palm_sugar = Ingredient.create(name:"palm sugar")
pandan_leaves = Ingredient.create(name:"pandan leaves")
pandan_flavouring = Ingredient.create(name:"pandan flavouring")
vegetable_oil = Ingredient.create(name:"vegetable oil")
whitebaitI = Ingredient.create(name:"whitebait")
self_raising_flour = Ingredient.create(name:"self rasing flour")
spring_onion = Ingredient.create(name:"spring onion")
butter = Ingredient.create(name:"butter")
chives = Ingredient.create(name:"chives")
cress = Ingredient.create(name:"cress")
rocket = Ingredient.create(name:"rocket")
cream_of_tartar = Ingredient.create(name:"cream of tartar")
kiwi_peaches_berries = Ingredient.create(name:"kiwi,peaches,berries")
whipped_cream = Ingredient.create(name:"whipped cream")
chocolate_chips = Ingredient.create(name:"chocolate chips")
candies = Ingredient.create(name:"candies")
fruit_slices = Ingredient.create(name:"fruit slices")
cayenne_peppers = Ingredient.create(name:"cayenne peppers")
turmeric = Ingredient.create(name:"turmeric powder")
galangal = Ingredient.create(name:"galangal powder")
ginger = Ingredient.create(name:"ginger")
kencur = Ingredient.create(name:"kencur powder")
lemongrass = Ingredient.create(name:"lemongrass")
kaffir_lime_leaves = Ingredient.create(name:"kaffir lime leaves")
macadamia_nuts = Ingredient.create(name:"macadamia nuts")
coriander_power = Ingredient.create(name:"coriander powder")
white_pepper = Ingredient.create(name:"white pepper")
okra = Ingredient.create(name:"okra")
carrot = Ingredient.create(name:"carrot")
leek = Ingredient.create(name:"leek")
red_pepper = Ingredient.create(name:"red pepper")
cilantro = Ingredient.create(name:"cilantro")
salt = Ingredient.create(name:"salt")
garlic_paste = Ingredient.create(name:"garlic paste")
lime = Ingredient.create(name:"lime")
sambal_oelek = Ingredient.create(name:"sambal oelek")
cornmeal = Ingredient.create(name:"cornmeal")





#Recipe_Ingredients

RecipeIngredient.create(amount:"5", unit:"slices of", ingredient: bacon, state:"chopped, diced", recipe: hawaiian_Island_Fried_Rice)
RecipeIngredient.create(amount:"1", unit:"lbs", ingredient:shrimp,recipe:hawaiian_Island_Fried_Rice)
RecipeIngredient.create(amount:"5", unit:"large", state:"minced,finely chopped",ingredient:garlic,recipe:hawaiian_Island_Fried_Rice)
RecipeIngredient.create(amount:"3", unit:"whole", ingredient:eggs, state:"lightly beaten",recipe:hawaiian_Island_Fried_Rice)
RecipeIngredient.create(amount:"5", unit:"oz", ingredient:portuguese_sausage, recipe:hawaiian_Island_Fried_Rice)
RecipeIngredient.create(amount:"1", state:"diced", ingredient:onion, recipe:hawaiian_Island_Fried_Rice)
RecipeIngredient.create(amount:"2", unit:"cup", ingredient:char_sui_pork, recipe:hawaiian_Island_Fried_Rice)
RecipeIngredient.create(ingredient:cookinhg_Oil, recipe:hawaiian_Island_Fried_Rice)


RecipeIngredient.create(amount: "1/4", unit:"cup", ingredient:mochiko, recipe: mochiko_Chicken)
RecipeIngredient.create(amount: "1/4", unit:"cup", ingredient:cornstarch, recipe:mochiko_Chicken)
RecipeIngredient.create(amount: "1/4", unit:"cup", ingredient:sugar, recipe:mochiko_Chicken)
RecipeIngredient.create(amount:"5", unit:"tsp", ingredient:soy_Sauce, recipe:mochiko_Chicken)
RecipeIngredient.create(amount:"2", unit:"whole", ingredient:eggs, recipe:mochiko_Chicken)
RecipeIngredient.create(amount:"1/4", unit:"cup", state:"finely chopped", ingredient:green_Onion, recipe:mochiko_Chicken)
RecipeIngredient.create(amount: "2", unit:"lbs", state:"boneless", ingredient:chicken_thigh, recipe:mochiko_Chicken,)
RecipeIngredient.create(amount: "1", unit:"tbsp", ingredient:seasame_seed, recipe:mochiko_Chicken,)
RecipeIngredient.create(ingredient:cookinhg_Oil, recipe:mochiko_Chicken)


RecipeIngredient.create(amount:"1/2,", unit:"cup", ingredient:water, recipe:haupia)
RecipeIngredient.create(amount:"5", unit:"tbsp", ingredient:cornstarch, recipe:haupia)
RecipeIngredient.create(amount:"1", unit:"(13 oz) can",  state:"unsweetened",ingredient: coconut_milk, recipe: haupia,)
RecipeIngredient.create(amount:"1/4", unit:"cup", ingredient:sugar, recipe:haupia)

RecipeIngredient.create(amount:"12", unit:"oz", ingredient:mahi, recipe:kokoda)
RecipeIngredient.create(amount:"3/4,", unit:"cup", ingredient:lime_jucie, recipe:kokoda)
RecipeIngredient.create(amount:"3/4", unit:"cup", ingredient:coconut_milk, recipe:kokoda)
RecipeIngredient.create(amount:"2,", state:"finely chopped", ingredient:tomatoes, recipe:kokoda)
RecipeIngredient.create(amount:"1", state:"finely chopped",ingredient:green_pepper, recipe:kokoda)
RecipeIngredient.create(amount:"1/3", unit:"cup", state:"finely diced", ingredient:english_Cucumber, recipe:kokoda,)
RecipeIngredient.create(amount:"1/3", unit:"cup",  state: "chopped",ingredient:parsley, recipe:kokoda,)
RecipeIngredient.create(amount:"1/3", unit:"cup",state:"finely chopped",ingredient:red_onion, recipe:kokoda)
RecipeIngredient.create(amount:"1", state:"finely diced", ingredient: jalapeno, recipe: kokoda)
RecipeIngredient.create(ingredient:black_pepper, recipe:kokoda,)
RecipeIngredient.create(ingredient:coconut, recipe:kokoda)
RecipeIngredient.create(ingredient:butter_lettuce, recipe:kokoda)


RecipeIngredient.create(amount:"14", unit:"oz", ingredient:coconut_milk, recipe:rourou)
RecipeIngredient.create(amount:"2",unit:"cups", ingredient:water, recipe:rourou)
RecipeIngredient.create(amount:"1/2", unit:"cups", ingredient:onion, recipe:rourou)
RecipeIngredient.create(amount:"3", ingredient:thai_chill, recipe:rourou)
RecipeIngredient.create(amount:"1", unit:"tsp", ingredient:salt, recipe:rourou)
RecipeIngredient.create(amount:"1", unit:"tsp", ingredient:garlic_paste, recipe:rourou)
RecipeIngredient.create(amount:"1/2", ingredient:lime, recipe:rourou)


RecipeIngredient.create(amount:"3", unit:"cups", ingredient:plain_flour, recipe:purini)
RecipeIngredient.create(amount:"4", unit:"tsp", ingredient:baking_powder, recipe:purini)
RecipeIngredient.create(amount:"2", unit:"tsp", ingredient:baking_soda, recipe:purini)
RecipeIngredient.create(amount:"2", unit:"cup", ingredient:sugar, recipe:purini)
RecipeIngredient.create(amount:"1", unit:"tin", ingredient:coconut_cream, recipe:purini)
RecipeIngredient.create(amount:"1", unit:"tsp", ingredient:nutmeg, recipe:purini)
RecipeIngredient.create(amount:"1", unit:"tsp", ingredient:cinnamon, recipe:purini)
RecipeIngredient.create(amount:"1", unit:"tsp", ingredient:ground_clove, recipe:purini)

RecipeIngredient.create(amount:"8", ingredient:banana_leaves, recipe:duncana)
RecipeIngredient.create(amount:"1", state:"grated", ingredient:coconut, recipe:duncana)
RecipeIngredient.create(amount:"3", unit:"lbs", state:"grated", ingredient:sweet_potato, recipe:duncana)
RecipeIngredient.create(amount:"2", unit:"cups", ingredient:plain_flour, recipe:duncana)
RecipeIngredient.create(amount:"1/2", unit:"cup", ingredient:sugar, recipe:duncana)
RecipeIngredient.create(amount:"1/2", unit:"cup", ingredient:water, recipe:duncana)
RecipeIngredient.create(amount:"1", unit:"tbsp", ingredient:vanilla, recipe:duncana)
RecipeIngredient.create(amount:"1/2", unit:"tsp", ingredient:cinnamon, recipe:duncana)
RecipeIngredient.create(amount:"1/2", unit:"tsp", ingredient:salt, recipe:duncana)
RecipeIngredient.create(amount:"1/4", unit:"tsp", ingredient:nutmeg, recipe:duncana)

RecipeIngredient.create(amount:"1", state:"ripe", ingredient:black_PineappleI, recipe:black_Pineapple)
RecipeIngredient.create(amount:"1/4", unit:"cup", ingredient:honey, recipe:black_Pineapple)
RecipeIngredient.create(amount:"1", unit:"shot", ingredient:dark_rum, recipe:black_Pineapple)

RecipeIngredient.create(amount:"1", unit:"large", state:"lightly beaten", ingredient:eggs, recipe:tum)
RecipeIngredient.create(amount:"5", ingredient:shallots, recipe:tum)
RecipeIngredient.create(amount:"5", ingredient:garlic, recipe:tum)
RecipeIngredient.create(amount:"3", ingredient:cayenne_peppers, recipe:tum)
RecipeIngredient.create(amount:"2", unit:"tsp", ingredient:turmeric, recipe:tum)
RecipeIngredient.create(amount:"2", unit:"tsp", ingredient:galangal, recipe:tum)
RecipeIngredient.create(amount:"2", unit:"tsp", ingredient:ginger, recipe:tum)
RecipeIngredient.create(amount:"2", unit:"tsp", ingredient:kencur, recipe:tum)
RecipeIngredient.create(amount:"2", unit:"stalks", ingredient:lemongrass, recipe:tum)
RecipeIngredient.create(amount:"4", ingredient:macadamia_nuts, recipe:tum)
RecipeIngredient.create(amount:"2", unit:"tsp", ingredient:coriander_power, recipe:tum)
RecipeIngredient.create(amount:"1", unit:"tsp", ingredient:shrimp_paste, recipe:tum)
RecipeIngredient.create(amount:"2", unit:"tbsp", ingredient:palm_sugar, recipe:tum)
RecipeIngredient.create(amount:"3", unit:"tbsp", ingredient:cookinhg_Oil, recipe:tum)
RecipeIngredient.create(amount:"1/4", unit:"tsp", state:"ground", ingredient:white_pepper, recipe:tum)
RecipeIngredient.create(amount:"6", state:"fresh", ingredient:bay_leaf, recipe:tum)
RecipeIngredient.create(amount:"1", state:"cut into strips", ingredient:cayenne_peppers, recipe:tum)
RecipeIngredient.create(state:"for wrapping", ingredient:banana_leaves, recipe:tum)

RecipeIngredient.create(amount:"2", unit:"cups", state:"shredded", ingredient:coconut, recipe:coconut_Pancakes)
RecipeIngredient.create(amount:"1", unit:"cup" ,state:"grated", ingredient:palm_sugar, recipe:coconut_Pancakes)
RecipeIngredient.create(amount:"1", unit:"cup", ingredient:water, recipe:coconut_Pancakes)
RecipeIngredient.create(amount:"1", unit:"tsp", ingredient:pandan_flavouring, recipe:coconut_Pancakes)
RecipeIngredient.create(amount:"1", unit:"cup", ingredient:plain_flour, recipe:coconut_Pancakes)
RecipeIngredient.create(amount:"1", ingredient:eggs,recipe:coconut_Pancakes)
RecipeIngredient.create(amount:"1/2", unit:"tsp", ingredient:salt, recipe:coconut_Pancakes)
RecipeIngredient.create(amount:"2", unit:"cups", ingredient:coconut_milk, recipe:coconut_Pancakes)
RecipeIngredient.create(ingredient:cookinhg_Oil, recipe:coconut_Pancakes)


RecipeIngredient.create(amount:"9", unit:"oz", ingredient:whitebaitI, recipe:whiteBait)
RecipeIngredient.create(amount:"1/2", unit:"cup", ingredient:self_raising_flour, recipe:whiteBait)
RecipeIngredient.create(amount:"2", state:"lightly beaten", ingredient:eggs, recipe:whiteBait)
RecipeIngredient.create(amount:"1", ingredient:lime_jucie, recipe:whiteBait)
RecipeIngredient.create(amount:"1", unit:"tbsp", ingredient:butter, recipe:whiteBait)
RecipeIngredient.create(amount:"1", state:"slice very thinly", ingredient:spring_onion, recipe:whiteBait)
RecipeIngredient.create(amount:"2", unit:"tbsp", ingredient:water, recipe:whiteBait)


RecipeIngredient.create(amount:"4", unit:"large", ingredient:eggs, recipe:pavlova)
RecipeIngredient.create(amount:"1/8", unit:"tsp", ingredient: cream_of_tartar, recipe:pavlova)
RecipeIngredient.create(amount:"1", unit:"cup", state:"superfine", ingredient:sugar, recipe:pavlova)
RecipeIngredient.create(amount:"1", unit:"tbsp", ingredient:cornstarch, recipe:pavlova)
RecipeIngredient.create(amount:"1", unit:"tsp", ingredient:vanilla, recipe:pavlova)
RecipeIngredient.create(amount:"1 1/2", unit:"cups", ingredient:whipped_cream, recipe:pavlova)
RecipeIngredient.create(amount:"1/4", unit:"cup", ingredient:chocolate_chips, recipe:pavlova)
RecipeIngredient.create(state:"crushed", ingredient:candies, recipe:pavlova)
RecipeIngredient.create(amount:"1", unit:"cup", state:"sliced", ingredient:kiwi_peaches_berries,recipe:pavlova)
RecipeIngredient.create(ingredient:fruit_slices, recipe:pavlova)

RecipeIngredient.create(amount:"10", unit:"oz", ingredient:chicken_thigh, recipe:lawar)
RecipeIngredient.create(amount:"3.5", unit:"oz", ingredient:green_bean, recipe:lawar)
RecipeIngredient.create(amount:"3.5", unit:"oz", ingredient:mung_bean_sprouts, recipe:lawar)
RecipeIngredient.create(amount:"5", unit:"oz", state:"grated", ingredient:coconut, recipe:lawar)
RecipeIngredient.create(amount:"2", unit:"tbsp", ingredient:cookinhg_Oil, recipe:lawar)
RecipeIngredient.create(amount:"1", unit:"tbsp", ingredient:sambal_oelek,recipe:lawar)
RecipeIngredient.create(amount:"2", ingredient:thai_chill, recipe:lawar)
RecipeIngredient.create(amount:"1", unit:"tbsp", ingredient:shrimp_paste, recipe:lawar)
RecipeIngredient.create(amount:"4", ingredient:garlic, recipe:lawar)
RecipeIngredient.create(amount:"5", ingredient:shallots, recipe:lawar)
RecipeIngredient.create(amount:"1", unit:"tsp", ingredient:coriander_seeds, recipe:lawar)
RecipeIngredient.create(amount:"1", unit:"tbsp", ingredient:galangal, recipe:lawar)
RecipeIngredient.create(amount:"1", unit:"tsp", ingredient:kencur, recipe:lawar)
RecipeIngredient.create(amount:"1", unit:"tbsp", ingredient:coconut_sugar, recipe:lawar)
RecipeIngredient.create(amount:"1", unit:"tbsp", ingredient:lime_jucie, recipe:lawar)
RecipeIngredient.create(amount:":1/4", unit:"tsp", state:"ground", ingredient:black_pepper, recipe:lawar)
RecipeIngredient.create(amount:"1", ingredient:bay_leaf, recipe:lawar)
RecipeIngredient.create(amount:"1", unit:"oz", ingredient:bawang_goreng, recipe:lawar)

RecipeIngredient.create(amount:"1/2", unit:"cup", ingredient:okra, recipe:fungi)
RecipeIngredient.create(amount:"1", unit:"cup", ingredient:cornmeal, recipe:fungi)
RecipeIngredient.create(amount:"1/4", unit:"cup", state:"chilled", ingredient:butter,recipe:fungi)

puts "✅ Done seeding!"
