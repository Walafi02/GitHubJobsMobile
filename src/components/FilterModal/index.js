import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import TextInput from '../TextInput';

import {
  Container,
  ModalBackground,
  Modal,
  Title,
  Footer,
  Button,
  ButtonText,
  Icon,
  IconButtonClose,
  CheckBoxButton,
  CheckBoxText,
  TextHotSearche,
  HotSearches,
  HotSearchesButton,
  HotSearchesButtonText,
} from './styles';

const hotSearches = [
  'PHP',
  'Rails',
  'Python',
  'JavaScript',
  'Scala',
  'Android',
  'iOS',
  'Linux',
  'Erlang',
  'San Francisco',
  'New York City',
  'Austin, TX',
  'London',
  'Europe',
];

const FilterModal = ({modal, filter}) => {
  const {currentFilter = {}, setCurrentFilter} = filter;
  const {openModal = false, setOpenModal} = modal;

  const [checkBox, setCheckBox] = useState(false);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const hendleClear = () => {
    setCurrentFilter({
      description: '',
      location: '',
      full_time: false,
    });
    setOpenModal(false);
  };

  const handleHotSearches = (searche) => {
    setCurrentFilter({
      description: searche,
      location,
      full_time: checkBox,
    });
    setOpenModal(false);
  };

  const handleApply = () => {
    setCurrentFilter({
      description,
      location,
      full_time: checkBox,
    });
    setOpenModal(false);
  };

  useEffect(() => {
    if (openModal) {
      setCheckBox(currentFilter.full_time || false);
      setDescription(currentFilter.description || '');
      setLocation(currentFilter.location || '');
    }
  }, [currentFilter, openModal]);

  return (
    <Container visible={openModal} onRequestClose={() => setOpenModal(false)}>
      <ModalBackground>
        <IconButtonClose onPress={() => setOpenModal(false)}>
          <Icon name="close" />
        </IconButtonClose>
        <View>
          <Modal>
            <Title>Filter</Title>
            <View>
              <TextInput
                label="Job Description"
                placeholder="Filter by title, benefits or companies"
                value={description}
                onChange={setDescription}
              />
              <TextInput
                label="Location"
                placeholder="Filter by city, state, zip code or country"
                value={location}
                onChange={setLocation}
              />
            </View>

            <CheckBoxButton onPress={() => setCheckBox((state) => !state)}>
              <Icons
                name={checkBox ? 'check-box' : 'check-box-outline-blank'}
                color={checkBox ? '#2b7fc3' : '#000'}
                size={25}
              />

              <CheckBoxText>Full Time Only</CheckBoxText>
            </CheckBoxButton>

            <View>
              <TextHotSearche>Hot Searches</TextHotSearche>

              <HotSearches>
                {hotSearches.map((item, index) => (
                  <HotSearchesButton
                    key={String(index)}
                    onPress={() => handleHotSearches(item)}>
                    <HotSearchesButtonText>{item}</HotSearchesButtonText>
                  </HotSearchesButton>
                ))}
              </HotSearches>
            </View>

            <Footer>
              <Button onPress={hendleClear}>
                <ButtonText>Clear</ButtonText>
              </Button>

              <Button onPress={handleApply}>
                <ButtonText>Search</ButtonText>
              </Button>
            </Footer>
          </Modal>
        </View>
      </ModalBackground>
    </Container>
  );
};

FilterModal.propTypes = {
  modal: PropTypes.shape({
    openModal: PropTypes.bool,
    setOpenModal: PropTypes.func,
  }).isRequired,
  filter: PropTypes.shape({
    currentFilter: PropTypes.shape({
      description: PropTypes.string,
      location: PropTypes.string,
      full_time: PropTypes.bool,
    }).isRequired,
    setCurrentFilter: PropTypes.func,
  }).isRequired,
};

export default FilterModal;
