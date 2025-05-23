interface TaskData {
  id: number;
  prority: number;
  category: number;
  title: string;
  desc: string;
  status: string;
}

const taskData: TaskData[] = [
  {
    id: 1,
    prority: 3,
    category: 1,
    title: 'Setup Macbook User',
    desc: 'persiapkan macbook untuk user adb yang belum di deploy',
    status: 'Pending',
  },
  {
    id: 2,
    prority: 3,
    category: 1,
    title: 'Annual check',
    desc: 'Cek semua inventory adb IRM yang ada',
    status: 'In Progress',
  },
  {
    id: 3,
    prority: 2,
    category: 1,
    title: 'Mobile Portofolio',
    desc: 'Bikin portofolio yang banyak supaya tidak lupa',
    status: 'Completed',
  },
  {
    id: 4,
    prority: 3,
    category: 1,
    title: 'Backup Restore',
    desc: 'Belajar backup restore untuk percobaan ke user IRM',
    status: 'Canceled',
  },
  {
    id: 5,
    prority: 2,
    category: 1,
    title: 'Indonesia VS Korea Utara',
    desc: 'Jangan lupa nonton senin malam di RCTI',
    status: 'Pending',
  },
  {
    id: 6,
    prority: 1,
    category: 1,
    title: 'Streaming playlist',
    desc: 'Cari streaming link untuk playlist tv online',
    status: 'Pending',
  },
  {
    id: 7,
    prority: 1,
    category: 1,
    title: 'Upload Jatisejahtera',
    desc: 'Upload server jatisejahtera ke digitalocean',
    status: 'Pending',
  },
];

export default taskData;
