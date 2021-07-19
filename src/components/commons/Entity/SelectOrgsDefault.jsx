import React from 'react'

// styles
import { Select, SelectArrow, SelectContainer } from './styles'
import Paragraphs from '../Paragraphs/Paragraphs'

export default function SelectDefault({
  orgs,
  defName,
  error,
  name,
  label,
  reference,
  items,
  value,
  required,
  onChange,
  hideError,
  transparent,
  valueid,
  disable,
}) {
  return (
    <>
      <Paragraphs className="tw-mb-1" size="xs" weight="bold">
        {label}
        {required && <span className="tw-text-red-500"> *</span>}
      </Paragraphs>
      {/* <div>
        <select defaultValue={defName}>
          {orgs?.listarOrganismos &&
            orgs.listarOrganismos.map((org, index) => {
              return (
                <option selected value={org.value} key={index}>
                  {org.nombre}
                </option>
              )
            })}
        </select>
      </div> */}

      <SelectContainer className="tw-mb-3">
        <Select
          disabled
          defaultValue={defName}
          transparent={transparent}
          className={`tw-bg-transparent ${
            transparent && 'tw-border'
          } tw-w-full tw-flex tw-items-center tw-font-Atkinson`}
        >
          {orgs &&
            orgs.map((org, index) => (
              <option value={org.value} key={index}>
                {org.nombre}
              </option>
            ))}
        </Select>
        <SelectArrow />
      </SelectContainer>

      {/* <SelectContainer className="tw-mb-3">
        <Select
          transparent={transparent}
          className={`tw-bg-transparent ${
            transparent && 'tw-border'
          } tw-w-full tw-flex tw-items-center tw-font-Atkinson`}
        >
          {orgs?.listarOrganismos &&
            orgs.listarOrganismos.map((org, index) => {
              if (org.nombre === defName) {
                return (
                  <option selected value={org.value} key={index}>
                    {org.nombre}
                  </option>
                )
              } else {
                return (
                  <option value={org.value} key={index}>
                    {org.nombre}
                  </option>
                )
              }
            })}
        </Select>
        <SelectArrow />
      </SelectContainer> */}
    </>
  )
}
