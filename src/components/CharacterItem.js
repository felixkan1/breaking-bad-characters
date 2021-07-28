import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from './Tooltip';
import { connect } from 'react-redux';
import { addTag, removeTag } from '../actions/characters';

const CharacterItem = ({ character, addTag, removeTag }) => {
  console.log(character);

  const tagInput = useRef('');
  const {
    char_id,
    name,
    birthday,
    occupation,
    img,
    nickname,
    portrayed,
    tags,
  } = character;

  const handleAddTag = (e) => {
    e.which = e.which || e.keyCode;
    if (e.which === 13) {
      const tag = tagInput.current.value.trim();
      if (tag === '') return;
      const characterIndex = char_id - 1;
      addTag(characterIndex, tag);
      tagInput.current.value = '';
    }
  };
  const handleRemoveTag = (e) => {
    const characterIndex = char_id - 1;
    const tagToremove = e.currentTarget.textContent;
    removeTag(characterIndex, tagToremove);
  };
  return (
    <div className="character-item">
      <img src={img} alt="character" />
      <div className="character-info">
        <h1 className="character-name">{name.toUpperCase()}</h1>
        <ul className="character-data-list">
          <div>Birthday: {birthday}</div>
          <div>Nickname: {nickname}</div>
          <div>Portrayed: {portrayed}</div>
          <div>
            Occupation:{' '}
            {
              <ul>
                {occupation.map((occupation) => (
                  <li>{occupation}</li>
                ))}
              </ul>
            }
          </div>

          <div className="tags">
            {tags.length > 0 &&
              tags.map((tag, index) => (
                <Tooltip text="Remove Tag" key={index}>
                  <div className="tag" onClick={handleRemoveTag}>
                    {tag}
                  </div>
                </Tooltip>
              ))}
          </div>
          <input
            ref={tagInput}
            type="text"
            className="tag-input"
            placeholder="Add a tag"
            autoComplete="off"
            onKeyUp={handleAddTag}
          />
        </ul>
      </div>
    </div>
  );
};

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired,
  addTag: PropTypes.func.isRequired,
  removeTag: PropTypes.func.isRequired,
};
export default connect(null, { addTag, removeTag })(CharacterItem);
