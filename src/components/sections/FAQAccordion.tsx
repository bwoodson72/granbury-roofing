import type { FAQItem } from '@/types/content'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQAccordionProps {
  items: FAQItem[]
  groupByCategory?: boolean
}

export function FAQAccordion({ items, groupByCategory = false }: FAQAccordionProps) {
  if (!groupByCategory) {
    return (
      <Accordion type="multiple">
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }

  const groups = items.reduce<Record<string, FAQItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {})

  return (
    <div>
      {Object.entries(groups).map(([category, categoryItems]) => (
        <div key={category}>
          <h3 className="text-lg font-semibold text-brand-navy capitalize mb-2 mt-6">
            {category}
          </h3>
          <Accordion type="multiple">
            {categoryItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  )
}
