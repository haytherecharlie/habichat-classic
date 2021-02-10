import React, { Fragment, useState } from 'react'
import AutoComplete from 'react-autocomplete'
import Text from 'ui/atoms/Text'
import postalCodes from 'config/postal-codes.json'
import AppLayout from 'ui/layouts/AppLayout'

const Locate = () => {
  const codes = Object.keys(postalCodes)
  const [search, setSearch] = useState('')
  let lastLetter = null
  return (
    <AppLayout loading={false} page="community" crawl={false} style={{ marginTop: 5 }} addButton={false}>
      <AutoComplete
        value={search}
        inputProps={{ id: 'states-autocomplete' }}
        wrapperStyle={{ position: 'relative', display: 'inline-block' }}
        items={Object.values(postalCodes)}
        getItemValue={item => item.community}
        shouldItemRender={(c, i) => c.label.toLowerCase().indexOf(i.toLowerCase()) !== -1}
        // sortItems={sortStates}
        onChange={(e, v) => setSearch(v)}
        onSelect={v => setSearch(v)}
        renderMenu={children => <div className="menu">{children}</div>}
        renderItem={(item, isHighlighted) => (
          <div className={`item ${isHighlighted ? 'item-highlighted' : ''}`} key={item.label}>
            {item.label}
          </div>
        )}
      />

      <Text size="M" text="All Communities" style={{ marginBottom: 10 }} bold unique />
      {Object.entries(postalCodes).map(([pc, { community }]) => {
        const jsx = (
          <Fragment key={pc}>
            {pc.substr(0, 1) !== lastLetter && (
              <Text size="S" text={pc.substr(0, 1)} style={{ margin: `10px 0` }} bold unique />
            )}
            <Text size="S" text={community} style={{ margin: `10px 0` }} unique />
          </Fragment>
        )
        lastLetter = pc.substr(0, 1)
        return jsx
      })}
    </AppLayout>
  )
}

export default Locate
