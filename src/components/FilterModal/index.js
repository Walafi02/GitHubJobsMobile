import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, CheckBox} from 'react-native';

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
  {title: 'Node', key: 'node'},
  {title: 'React', key: 'react'},
  {title: 'Java', key: 'java'},
  {title: 'PHP', key: 'php'},
  {title: 'Node', key: 'node'},
  {title: 'React', key: 'react'},
  {title: 'Java', key: 'java'},
  {title: 'PHP', key: 'php'},
];

const FilterModal = ({
  title,
  visible,
  onClose,
  onConfirm,
  closeLabel,
  confirmLabel,
  children,
  disabledConfirm = false,
  disabledClose = false,
}) => {
  const [checkBox, setCheckBox] = useState(true);

  return (
    <Container visible={visible} onRequestClose={onClose}>
      <ModalBackground>
        <IconButtonClose onPress={onClose}>
          <Icon name="close" />
        </IconButtonClose>
        <View>
          <Modal>
            <Title>Filter</Title>
            <View>
              <TextInput
                label="Job Description"
                placeholder="Filter by Title..."
              />
              <TextInput label="Location" />
            </View>

            <CheckBoxButton onPress={() => setCheckBox((state) => !state)}>
              <CheckBox
                value={checkBox}
                onValueChange={setCheckBox}
                tintColors={{true: '#2b7fc3', false: 'black'}}
              />

              <CheckBoxText>Full Time Only</CheckBoxText>
            </CheckBoxButton>

            <View>
              <TextHotSearche>Hot Searches</TextHotSearche>

              <HotSearches>
                {hotSearches.map((item, index) => (
                  <HotSearchesButton
                    key={String(index)}
                    onPress={() => console.log(item.key)}>
                    <HotSearchesButtonText>{item.title}</HotSearchesButtonText>
                  </HotSearchesButton>
                ))}
              </HotSearches>
            </View>

            <Footer>
              <Button onPress={onClose}>
                <ButtonText>Clear</ButtonText>
              </Button>

              <Button onPress={onClose}>
                <ButtonText>Search</ButtonText>
              </Button>
            </Footer>

            {/* {title && <Title>{title}</Title>}
            <Footer>
              {onClose && (
                <Button onPress={onClose} disabled={disabledClose}>
                  <ButtonText disabled={disabledClose}>
                    {closeLabel || 'Cancelar'}
                  </ButtonText>
                </Button>
              )}
              {onConfirm && (
                <Button onPress={onConfirm} disabled={disabledConfirm}>
                  <ButtonText disabled={disabledConfirm}>
                    {confirmLabel || 'Confirmar'}
                  </ButtonText>
                </Button>
              )}
            </Footer> */}
          </Modal>
        </View>
      </ModalBackground>
    </Container>
  );
};

FilterModal.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  children: PropTypes.element.isRequired,
  disabledConfirm: PropTypes.bool,
  disabledClose: PropTypes.bool,
  closeLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
};

FilterModal.defaultProps = {
  title: null,
  onClose: null,
  onConfirm: null,
  disabledConfirm: false,
  disabledClose: false,
  closeLabel: null,
  confirmLabel: null,
};

export default FilterModal;
