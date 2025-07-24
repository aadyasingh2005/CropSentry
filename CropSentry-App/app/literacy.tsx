import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Feather } from '@expo/vector-icons'; // Import from @expo/vector-icons

export default function CropLiteracyPage() {
  return (
    <View className="flex-1 bg-white">
      {/* Status Bar */}
      <View className="px-4 py-2 flex-row justify-between items-center bg-gray-100">
        <Text className="text-sm">9:30</Text>
        <View className="flex-row gap-1">
          <Text className="text-sm">4G</Text>
          <Text className="text-sm">•••</Text>
        </View>
      </View>

      {/* Header */}
      <View className="p-4 flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <Feather name="arrow-left" size={20} /> {/* Replaced ArrowLeft icon */}
          <Text className="text-lg font-semibold text-green-700">CropSentry</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-2xl text-gray-600">⋮</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 bg-[#c4df85] px-4">
        <View className="flex-row items-center mt-2 mb-4">
          <Text className="text-xl font-semibold">Crop Literacy</Text>
          <Text className="ml-2 px-2 py-1 bg-green-800 text-white text-xs rounded">AI Scan</Text>
        </View>

        {[ 
          {
            title: 'Know your crop: grow better',
            //img: require('../assets/placeholder.png'),
          },
          {
            title: 'Identify your pests/diseases: keep crops grow',
            //img: require('../assets/placeholder.png'),
          },
          {
            title: 'Prevent & protect: protect your crops',
            //img: require('../assets/placeholder.png'),
          },
        ].map((item, index) => (
          <View key={index} className="bg-white p-4 rounded-md mb-4 flex-row">
            <Image
              //+
              // source={item.img}
              className="w-24 h-24 rounded-md mr-3"
              resizeMode="cover"
            />
            <View className="flex-1">
              <Text className="font-medium mb-2">{item.title}</Text>
              <TouchableOpacity className="bg-green-700 px-3 py-1 rounded">
                <Text className="text-white text-xs">Read More</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center py-2 bg-white border-t border-gray-200">
        <Link href="/">
          <TouchableOpacity className="items-center">
            <Feather name="home" size={20} /> {/* Replaced Home icon */}
            <Text className="text-xs mt-1">Home</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/capture" asChild>
          <TouchableOpacity className="w-12 h-12 bg-green-700 rounded-full items-center justify-center -mt-6">
            <Feather name="camera" size={20} color="white" /> {/* Replaced Camera icon */}
          </TouchableOpacity>
        </Link>
        <Link href="/profile" asChild>
          <TouchableOpacity className="items-center">
            <Feather name="user" size={20} /> {/* Replaced User icon */}
            <Text className="text-xs mt-1">Profile</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
