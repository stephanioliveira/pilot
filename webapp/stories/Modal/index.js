import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'

import IconAddPhoto from 'react-icons/lib/md/add-a-photo'

import style from './style.css'

import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalActions,
} from '../../src/components/Modal'

import Button from '../../src/components/Button'

class ModalWithState extends Component {
  constructor () {
    super()

    this.state = {
      isOpen: true,
    }

    this.handleToggleModal = this.handleToggleModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleToggleModal () {
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleCloseModal () {
    this.setState({ isOpen: false })
  }

  render () {
    return (
      <div>
        {/* call to action to open the modal */}
        <Button
          fill="flat"
          relevance="low"
          onClick={this.handleToggleModal}
          icon={<IconAddPhoto />}
        >
          Add Photo
        </Button>

        {/* modal content definition */}
        <Modal
          label="Create a Transaction"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleToggleModal}
        >
          <ModalTitle icon={<IconAddPhoto />} title="Add Photo" />

          <ModalContent>
            <p>This is the modal Content with React Modal module</p>
          </ModalContent>

          <ModalActions>
            <Button
              fill="outline"
              size="small"
              onClick={this.handleToggleModal}
            >
              Cancel
            </Button>

            <Button
              size="small"
              onClick={this.handleToggleModal}
            >
              Confirm
            </Button>
          </ModalActions>
        </Modal>
      </div>
    )
  }
}

storiesOf('Modal', module)
  .add('default', () => (
    <div className={style.container}>
      <ModalWithState />
    </div>
  ))
