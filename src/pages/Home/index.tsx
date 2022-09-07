import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Logo from '../../assets/Logo';
import TreeDots from '../../assets/TreeDots';
import Add from '../../assets/AddIcon';
import Search from '../../assets/SearchIcon';
import {Button} from '../../components/Button';
export function Home() {
  return (
    // <Styles.Container>
    //   <Styles.ImageContainer>
    //     <Logo />
    //   </Styles.ImageContainer>
    //   <Styles.LoginContainer>
    //     <Styles.RowContainer>
    //       <Image source={require('../../assets/profile.png')} />
    //       <Styles.NameText>Sanjay Shendy</Styles.NameText>
    //       <TreeDots />
    //     </Styles.RowContainer>
    //     <Styles.RowContainer></Styles.RowContainer>
    //     <Styles.RowContainer></Styles.RowContainer>
    //   </Styles.LoginContainer>
    //   <Styles.ButtonContainer>
    //     <Button />
    //   </Styles.ButtonContainer>
    // </Styles.Container>

    <View style={styles.Container}>
      <View style={styles.ImageContainer}>
        <View style={styles.Image}>
          <Logo />
        </View>
      </View>
      <View style={styles.LoginContainer}>
        <View style={styles.RowContainer}>
          <View style={styles.RowGroupContainer}>
            <Image source={require('../../assets/profile.png')} />
            <Text style={styles.NameText}>Sanjay Shendy</Text>
          </View>
          <View style={styles.TreeDotsContainer}>
            <TouchableOpacity onPress={() => {}}>
              <TreeDots />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.RowClickable}>
          <Add />
          <Text style={styles.RowClickableText}>Log Into Another Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.RowClickable}>
          <View style={styles.RowClickableSmallerIcon}>
            <Search />
          </View>
          <Text style={styles.RowClickableText}>Find Your Account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <Button />
      </View>
    </View>
  );
}
