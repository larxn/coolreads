import * as fixtures from '@/data/fixtures/notifications'

let notificationInjected = false

export function useNotifications() {
  const notifications = ref(fixtures.notifications)

  const onMarkAsRead = (id: string) => {
    const notificationIndex = notifications.value.findIndex(
      (notification) => notification.id === id,
    )

    if (notificationIndex !== null) {
      notifications.value[notificationIndex].isRead = true
    }
  }

  const playAudio = () => {
    const audio = new Audio('/audio/notification.mp3')
    audio.play()
  }

  const injectNewNotification = () => {
    setTimeout(() => {
      notifications.value.unshift(fixtures.extraNotification)
      playAudio()
    }, 2000)
  }

  onMounted(() => {
    if (!notificationInjected) {
      document.body.addEventListener('click', injectNewNotification, {
        capture: true,
        once: true,
      })
    }
    notificationInjected = true
  })

  return { notifications, onMarkAsRead }
}
